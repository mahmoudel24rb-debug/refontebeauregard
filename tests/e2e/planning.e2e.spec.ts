import { expect, test, type Page } from '@playwright/test'

// Critères d'acceptation du calendrier « Semaine type » (/planning).
//
// Les nombres attendus correspondent au planning de la rentrée septembre 2026 :
// 31 créneaux, dont 27 horodatés et 4 sans horaire, sur 6 jours et 3 salles.
// Ils valent aussi bien pour la collection Payload que pour le repli statique,
// les deux portant les mêmes données.
//
// Base par défaut : le serveur de dev. Pointer ailleurs avec E2E_BASE_URL
// (ex. un `next start` sur un autre port).

const BASE = process.env.E2E_BASE_URL ?? 'http://localhost:3000'
const PLANNING = `${BASE}/planning`

const HAUTEUR_HEURE = 66 // .bg-cal-corps { --hpx } au-dessus de 1024px
const DEBUT_AXE = 9 // 9h, borne basse dérivée des données

const allerAuPlanning = async (page: Page) => {
  await page.goto(PLANNING, { waitUntil: 'networkidle' })
  await expect(page.locator('.bg-cal')).toBeVisible()
}

test.describe('Calendrier du planning', () => {
  test.use({ viewport: { width: 1280, height: 900 } })

  test('1. vue Semaine : 6 jours, 27 blocs, 4 créneaux sans horaire', async ({ page }) => {
    await allerAuPlanning(page)
    await expect(page.locator('.bg-cal-entete')).toHaveCount(6)
    await expect(page.locator('.bg-cal-event')).toHaveCount(27)
    await expect(page.locator('.bg-cal-mini')).toHaveCount(4)
    await expect(page.locator('.bg-cal-attente-titre')).toHaveText('Horaire à confirmer')
  })

  test('2. un cours de 18h à 19h tombe à la bonne hauteur', async ({ page }) => {
    await allerAuPlanning(page)
    const yoga = page.locator('.bg-cal-event[aria-label^="Yoga, lundi 18h"]')
    const mesures = await yoga.evaluate((el: HTMLElement) => ({
      top: el.offsetTop,
      hauteur: el.offsetHeight,
    }))
    // (18h - 9h) * 66px
    expect(Math.abs(mesures.top - (18 - DEBUT_AXE) * HAUTEUR_HEURE)).toBeLessThanOrEqual(3)
    expect(Math.abs(mesures.hauteur - (HAUTEUR_HEURE - 2))).toBeLessThanOrEqual(3)
  })

  test('3. les cours simultanés du mardi soir se partagent la colonne', async ({ page }) => {
    await allerAuPlanning(page)
    const mob = page.locator('.bg-cal-event[aria-label^="Mob & Stretch, mardi 18h"]')
    const cross = page.locator('.bg-cal-event[aria-label^="Cross Training, mardi 18h"]')
    const a = (await mob.boundingBox())!
    const b = (await cross.boundingBox())!
    // même départ vertical
    expect(Math.abs(a.y - b.y)).toBeLessThanOrEqual(2)
    // aucun recouvrement horizontal
    expect(a.x + a.width).toBeLessThanOrEqual(b.x + 1)
    // largeurs égales, et cohérentes avec le nombre de colonnes du cluster
    // (3 ici : Total Silhouette 17h15-18h15 chaîne les deux blocs de 18h)
    expect(Math.abs(a.width - b.width)).toBeLessThanOrEqual(1)
    const cols = Number(await mob.getAttribute('data-cols'))
    const colonne = (await page.locator('.bg-cal-col').first().boundingBox())!.width
    const part = a.width / colonne
    expect(cols).toBeGreaterThanOrEqual(2)
    expect(part).toBeGreaterThan(1 / cols - 0.08)
    expect(part).toBeLessThan(1 / cols + 0.03)
  })

  test('4. le filtre par activité restreint la grille puis la restaure', async ({ page }) => {
    await allerAuPlanning(page)
    await page.getByRole('button', { name: /Activités/ }).click()
    await expect(page.locator('.bg-cal-case input')).toHaveCount(13)

    await page.locator('.bg-cal-case', { hasText: 'Pilates' }).locator('input').check()
    await expect(page.locator('.bg-cal-event')).toHaveCount(8)
    await expect(page.locator('.bg-cal-attente')).toHaveCount(0)
    await expect(page.locator('.bg-cal-compteur')).toHaveText('1')

    const badge = page.locator('.bg-cal-badge')
    await expect(badge).toContainText('Pilates')
    await badge.getByRole('button', { name: /Retirer le filtre/ }).click()
    await expect(page.locator('.bg-cal-event')).toHaveCount(27)
    await expect(page.locator('.bg-cal-mini')).toHaveCount(4)
  })

  test('6. vue Liste : ordre des jours, sans-horaire en fin de groupe, lien de fiche', async ({
    page,
  }) => {
    await allerAuPlanning(page)
    await page.getByRole('button', { name: 'Liste', exact: true }).click()
    await expect(page.locator('.bg-cal-liste-jour')).toHaveText([
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ])
    const lundi = page.locator('.bg-cal-liste-groupe').first()
    await expect(lundi.locator('.bg-cal-liste-ligne').last()).toContainText('À confirmer')
    await expect(page.locator('.bg-cal-liste a[href="/cours/cross-training"]').first()).toBeVisible()
  })

  test('7. la fiche d’un cours s’ouvre au clic et rend le focus à Échap', async ({ page }) => {
    await allerAuPlanning(page)
    const boxe = page.locator('.bg-cal-event[aria-label^="Boxe, jeudi 19h"]')
    await boxe.click()
    const fiche = page.locator('[role="dialog"].bg-cal-popover')
    await expect(fiche).toBeVisible()
    await expect(fiche).toContainText('Boxe')
    await expect(fiche).toContainText('19h – 20h')
    await expect(fiche).toContainText('Bulle')
    await expect(fiche.locator('a')).toHaveAttribute('href', '/cours/boxe')
    await expect(boxe).toHaveAttribute('aria-expanded', 'true')

    await page.keyboard.press('Escape')
    await expect(fiche).toHaveCount(0)
    await expect(boxe).toBeFocused()
    await expect(boxe).toHaveAttribute('aria-expanded', 'false')
  })

  test('8. un cours sans fiche et sans horaire n’affiche ni lien ni heure', async ({ page }) => {
    await allerAuPlanning(page)
    await page.locator('.bg-cal-mini[aria-label^="Pole Dance, lundi"]').click()
    const fiche = page.locator('[role="dialog"].bg-cal-popover')
    await expect(fiche).toContainText('Pole Dance')
    await expect(fiche).toContainText('Horaire à confirmer')
    await expect(fiche.locator('a')).toHaveCount(0)
  })

  test('9. au clavier : bascule de vue, filtre, premier bloc, Entrée ouvre', async ({ page }) => {
    await allerAuPlanning(page)
    await page.locator('.bg-cal-btn-actif').focus()
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: /Activités/ })).toBeFocused()
    await page.keyboard.press('Tab')
    const premier = page.locator('.bg-cal-mini, .bg-cal-event').first()
    await expect(premier).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('[role="dialog"].bg-cal-popover')).toBeVisible()
  })

  test('10. chaque bloc porte un libellé complet', async ({ page }) => {
    await allerAuPlanning(page)
    const libelles = await page.locator('.bg-cal-event').evaluateAll((els) =>
      els.map((e) => e.getAttribute('aria-label') || ''),
    )
    expect(libelles).toHaveLength(27)
    for (const l of libelles) {
      // « Cours, jour heure, durée, salle »
      expect(l.split(', ')).toHaveLength(4)
      expect(l).toMatch(/, (lundi|mardi|mercredi|jeudi|vendredi|samedi) \d{1,2}h(\d{2})?, /)
    }
    await expect(page.locator('.bg-cal-event').first()).toHaveAttribute('aria-haspopup', 'dialog')
  })

  test('12. le reset de framer.css est contré sur les commandes', async ({ page }) => {
    await allerAuPlanning(page)
    for (const sel of ['.bg-cal-select', '.bg-cal-event', '.bg-cal-btn']) {
      const style = await page.locator(sel).first().evaluate((el) => {
        const s = getComputedStyle(el)
        return { taille: parseFloat(s.fontSize), police: s.fontFamily }
      })
      expect(style.taille, sel).toBeGreaterThanOrEqual(13)
      expect(style.police, sel).toContain('Inter')
    }
  })

  test('13. aucune animation quand le visiteur les refuse', async ({ browser }) => {
    const contexte = await browser.newContext({
      viewport: { width: 1280, height: 900 },
      reducedMotion: 'reduce',
    })
    const page = await contexte.newPage()
    await allerAuPlanning(page)
    await page.locator('.bg-cal-event').first().click()
    const fiche = page.locator('[role="dialog"].bg-cal-popover')
    await expect(fiche).toBeVisible()
    const anim = await fiche.evaluate((el) => {
      const s = getComputedStyle(el)
      return { nom: s.animationName, duree: s.animationDuration, transition: s.transitionDuration }
    })
    expect(anim.nom).toBe('none')
    expect(anim.duree).toBe('0s')
    expect(anim.transition).toBe('0s')
    await contexte.close()
  })
})

test.describe('Calendrier du planning sur mobile', () => {
  test('5. la vue Jour s’ouvre sur le jour courant', async ({ browser }) => {
    const contexte = await browser.newContext({ viewport: { width: 390, height: 844 } })
    // horloge figée un mercredi
    await contexte.addInitScript(`{
      const D = Date; const fixe = new D('2026-08-19T10:00:00').getTime();
      class FauxDate extends D {
        constructor(...a) { if (!a.length) super(fixe); else super(...a) }
        static now() { return fixe }
      }
      window.Date = FauxDate;
    }`)
    const page = await contexte.newPage()
    await allerAuPlanning(page)
    await expect(page.locator('.bg-cal-select')).toHaveValue('jour')
    await expect(page.getByRole('button', { name: 'Mercredi', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await contexte.close()
  })

  test('11. rien ne déborde horizontalement et rien ne passe devant le header', async ({
    browser,
  }) => {
    const contexte = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const page = await contexte.newPage()
    await allerAuPlanning(page)
    await page.getByRole('button', { name: /Activités/ }).click()
    const mesures = await page.evaluate(() => ({
      largeur: document.body.scrollWidth,
      fenetre: window.innerWidth,
      trop: [...document.querySelectorAll('[class*="bg-cal"]')]
        .map((e) => ({ c: e.className, z: getComputedStyle(e).zIndex }))
        .filter((x) => x.z !== 'auto' && Number(x.z) >= 10),
    }))
    expect(mesures.largeur).toBeLessThanOrEqual(mesures.fenetre)
    expect(mesures.trop).toEqual([])
    await contexte.close()
  })
})
