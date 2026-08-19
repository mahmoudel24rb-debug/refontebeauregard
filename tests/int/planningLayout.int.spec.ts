import { describe, it, expect } from 'vitest'

import {
  activitesDisponibles,
  bornesAxe,
  formatDuree,
  formatFin,
  formatHeure,
  heureEnMinutes,
  normaliserActivite,
  poserJour,
  rangSalle,
  sansHeure,
  type CreneauCal,
} from '@/components/sportix/planningLayout'

// Fabrique de créneau : seules les valeurs utiles au test sont passées.
let n = 0
const c = (o: Partial<CreneauCal> & { heure?: string }): CreneauCal => {
  n += 1
  return {
    id: o.id ?? `c${n}`,
    jour: o.jour ?? 'Lundi',
    salle: o.salle ?? 'Salle Fitness',
    cours: o.cours ?? 'Cours',
    heure: o.heure,
    debutMin: o.debutMin !== undefined ? o.debutMin : heureEnMinutes(o.heure),
    duree: o.duree ?? 60,
    slug: o.slug,
  }
}

describe('heureEnMinutes', () => {
  it('lit les deux formats du planning', () => {
    expect(heureEnMinutes('10h')).toBe(600)
    expect(heureEnMinutes('9h15')).toBe(555)
    expect(heureEnMinutes('18h30')).toBe(1110)
    expect(heureEnMinutes(' 19h ')).toBe(1140)
  })

  it('renvoie null hors format', () => {
    expect(heureEnMinutes(undefined)).toBeNull()
    expect(heureEnMinutes('')).toBeNull()
    expect(heureEnMinutes('midi')).toBeNull()
    expect(heureEnMinutes('10:30')).toBeNull()
    expect(heureEnMinutes('25h')).toBeNull()
    expect(heureEnMinutes('10h75')).toBeNull()
  })
})

describe('rangSalle', () => {
  it('ordonne Fitness puis Cross puis Bulle', () => {
    expect(rangSalle('Salle Fitness')).toBeLessThan(rangSalle('Salle Cross'))
    expect(rangSalle('Salle Cross')).toBeLessThan(rangSalle('Bulle'))
  })

  it('repousse les salles inconnues en fin', () => {
    expect(rangSalle('Terrain')).toBeGreaterThan(rangSalle('Bulle'))
    expect(rangSalle(undefined)).toBeGreaterThan(rangSalle('Bulle'))
  })
})

describe('poserJour', () => {
  it('pose un créneau isolé sur toute la largeur', () => {
    const poses = poserJour([c({ heure: '18h', cours: 'Yoga' })])
    expect(poses).toHaveLength(1)
    expect(poses[0]).toMatchObject({ debut: 1080, fin: 1140, col: 0, cols: 1 })
  })

  it('met deux salles à la même heure côte à côte', () => {
    const poses = poserJour([
      c({ heure: '18h', cours: 'Cross Training', salle: 'Bulle' }),
      c({ heure: '18h', cours: 'Mob & Stretch', salle: 'Salle Fitness' }),
    ])
    expect(poses.map((p) => p.cols)).toEqual([2, 2])
    expect(poses.map((p) => p.col).sort()).toEqual([0, 1])
    // le tri place la Salle Fitness en première colonne
    const fitness = poses.find((p) => p.creneau.salle === 'Salle Fitness')
    expect(fitness?.col).toBe(0)
  })

  it('gère une chaîne transitive 18h / 18h30 / 19h en 2 colonnes', () => {
    const poses = poserJour([
      c({ heure: '18h', cours: 'A' }),
      c({ heure: '18h30', cours: 'B' }),
      c({ heure: '19h', cours: 'C' }),
    ])
    // A ne chevauche pas C, mais B les relie : un seul cluster
    expect(poses.every((p) => p.cols === 2)).toBe(true)
    const parCours = Object.fromEntries(poses.map((p) => [p.creneau.cours, p.col]))
    expect(parCours.A).toBe(0)
    expect(parCours.B).toBe(1)
    // C réutilise la colonne libérée par A (fin 19h <= début 19h)
    expect(parCours.C).toBe(0)
  })

  it('répartit trois salles simultanées sur trois colonnes distinctes', () => {
    const poses = poserJour([
      c({ heure: '18h', cours: 'X', salle: 'Bulle' }),
      c({ heure: '18h', cours: 'Y', salle: 'Salle Cross' }),
      c({ heure: '18h', cours: 'Z', salle: 'Salle Fitness' }),
    ])
    expect(poses.every((p) => p.cols === 3)).toBe(true)
    expect(poses.map((p) => p.col).sort()).toEqual([0, 1, 2])
  })

  it('ne cluster pas deux créneaux qui se touchent exactement', () => {
    const poses = poserJour([
      c({ heure: '18h', cours: 'Cross Training' }),
      c({ heure: '19h', cours: 'Boxe' }),
    ])
    expect(poses.every((p) => p.cols === 1 && p.col === 0)).toBe(true)
  })

  it('respecte les durées personnalisées pour le chevauchement', () => {
    // 18h pendant 30 min puis 18h30 : contact exact, donc pas de chevauchement
    const courts = poserJour([
      c({ heure: '18h', cours: 'A', duree: 30 }),
      c({ heure: '18h30', cours: 'B' }),
    ])
    expect(courts.every((p) => p.cols === 1)).toBe(true)
    // 18h pendant 90 min chevauche bien 18h30
    const longs = poserJour([
      c({ heure: '18h', cours: 'A', duree: 90 }),
      c({ heure: '18h30', cours: 'B' }),
    ])
    expect(longs.every((p) => p.cols === 2)).toBe(true)
  })

  it('ignore les créneaux sans horaire', () => {
    const liste = [c({ cours: 'Pole Dance' }), c({ heure: '18h', cours: 'Yoga' })]
    expect(poserJour(liste)).toHaveLength(1)
    expect(sansHeure(liste).map((x) => x.cours)).toEqual(['Pole Dance'])
  })
})

describe('bornesAxe', () => {
  it('arrondit aux heures pleines encadrantes', () => {
    expect(
      bornesAxe([c({ heure: '9h15', cours: 'Pilates' }), c({ heure: '19h15', cours: 'Pilates' })]),
    ).toEqual({ debut: 9 * 60, fin: 21 * 60 })
  })

  it('ne rogne pas une fin déjà sur une heure pleine', () => {
    expect(bornesAxe([c({ heure: '10h', cours: 'École du dos' })])).toEqual({
      debut: 600,
      fin: 660,
    })
  })

  it('replie sur 9h-21h sans créneau horodaté', () => {
    expect(bornesAxe([])).toEqual({ debut: 540, fin: 1260 })
    expect(bornesAxe([c({ cours: 'Pole Dance' })])).toEqual({ debut: 540, fin: 1260 })
  })
})

describe('formats', () => {
  it('formate les heures', () => {
    expect(formatHeure(1080)).toBe('18h')
    expect(formatHeure(1095)).toBe('18h15')
    expect(formatHeure(555)).toBe('9h15')
  })

  it('formate les fins', () => {
    expect(formatFin(1080, 60)).toBe('19h')
    expect(formatFin(1155, 60)).toBe('20h15')
    expect(formatFin(1110, 45)).toBe('19h15')
  })

  it('formate les durées', () => {
    expect(formatDuree(60)).toBe('1h')
    expect(formatDuree(90)).toBe('1h30')
    expect(formatDuree(45)).toBe('45 min')
    expect(formatDuree(120)).toBe('2h')
  })
})

describe('normaliserActivite', () => {
  it('neutralise accents, casse et espaces', () => {
    expect(normaliserActivite('École du dos')).toBe('ecole du dos')
    expect(normaliserActivite('  HYROX ')).toBe('hyrox')
    expect(normaliserActivite('Mob  &  Stretch')).toBe('mob & stretch')
  })

  it('fait correspondre un nom de créneau et un nom de fiche', () => {
    expect(normaliserActivite('Cross Training')).toBe(normaliserActivite('cross training'))
  })
})

describe('activitesDisponibles', () => {
  it('trie par nom et compte les créneaux', () => {
    const liste = activitesDisponibles([
      c({ heure: '18h', cours: 'Yoga' }),
      c({ heure: '19h', cours: 'Yoga' }),
      c({ heure: '17h', cours: 'Pilates' }),
      c({ cours: 'Pole Dance' }),
    ])
    expect(liste).toEqual([
      { nom: 'Pilates', total: 1 },
      { nom: 'Pole Dance', total: 1 },
      { nom: 'Yoga', total: 2 },
    ])
  })
})
