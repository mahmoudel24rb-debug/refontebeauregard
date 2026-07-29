/* Crée l'article de test du gabarit blog (PROD Neon).
   NON DESTRUCTIF : ne fait rien si le slug 'article-de-test' existe déjà.
   Contenu : H2, H3, paragraphes, gras/italique, liste à puces, citation,
   image avec légende, lien, CTA final.
   Usage : npm run payload -- run scripts/seed-article-test.mjs
*/
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '../src/payload.config.ts'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const texte = (t, format = 0) => ({ detail: 0, format, mode: 'normal', style: '', text: t, type: 'text', version: 1 })
const bloc = (type, children, extra = {}) => ({ type, children, direction: 'ltr', format: '', indent: 0, version: 1, ...extra })
const p = (...children) => bloc('paragraph', children, { textFormat: 0, textStyle: '' })
const h = (tag, t) => bloc('heading', [texte(t)], { tag })
const li = (t, value) => bloc('listitem', [texte(t)], { value })
const lien = (t, url) => bloc('link', [texte(t)], { fields: { linkType: 'custom', newTab: false, url }, type: 'link', version: 3 })

async function run() {
  const payload = await getPayload({ config })

  const existe = await payload.find({ collection: 'articles', where: { slug: { equals: 'article-de-test' } }, limit: 1 })
  if (existe.totalDocs > 0) {
    console.log('Article de test déjà présent (id ' + existe.docs[0].id + ') : rien à faire')
    process.exit(0)
  }

  // Image d'illustration : réutilise un visuel existant du site
  const media = await payload.create({
    collection: 'media',
    filePath: path.resolve(dirname, '../public/assets/beauregard/cours.webp'),
    data: { alt: 'Cours collectif au Parc Beauregard' },
  })
  console.log('Media créé : id ' + media.id)

  const corps = {
    root: {
      type: 'root',
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
      children: [
        p(texte("Cet article de démonstration vérifie la mise en forme du gabarit : chaque type de contenu du back-office y apparaît une fois. Il peut être dépublié une fois la vérification faite.")),
        h('h2', 'Un titre de niveau 2'),
        p(
          texte('Un paragraphe avec du '),
          texte('texte en gras', 1),
          texte(', du '),
          texte('texte en italique', 2),
          texte(' et du '),
          texte('gras italique', 3),
          texte(' pour contrôler les graisses. Voici aussi un '),
          lien('lien vers la page des tarifs', '/tarifs'),
          texte(' inséré dans le texte courant.'),
        ),
        h('h3', 'Un sous-titre de niveau 3'),
        p(texte('Un deuxième paragraphe, plus court, pour vérifier la respiration entre les blocs.')),
        bloc('list', [li('Premier élément de la liste', 1), li('Deuxième élément, un peu plus long pour tester le retour à la ligne dans une puce', 2), li('Troisième élément', 3)], { listType: 'bullet', start: 1, tag: 'ul' }),
        bloc('quote', [texte("Une citation mise en avant : elle doit se détacher visuellement du texte courant, avec une bordure et un fond légers.")]),
        bloc('upload', [], { relationTo: 'media', value: media.id, fields: null, type: 'upload', version: 3 }),
        p(texte('Légende : un cours collectif dans la salle fitness du Parc Beauregard.', 2)),
        h('h2', 'Dernier bloc : le bouton d’action'),
        p(texte("Le paragraphe final est suivi d'un bouton d'appel à l'action, rendu automatiquement quand un lien est seul dans le dernier paragraphe.")),
        p(lien('Découvrir nos cours', '/cours')),
      ],
    },
  }

  const article = await payload.create({
    collection: 'articles',
    data: {
      titre: 'Article de test : tous les types de contenu',
      slug: 'article-de-test',
      extrait: "Article de démonstration du gabarit : titres, gras, listes, citation, image légendée, lien et bouton d'action.",
      corps,
      image: media.id,
      datePublication: new Date('2026-07-29').toISOString(),
      publie: true,
    },
  })
  console.log('Article créé : id ' + article.id + ' -> /blog/article-de-test')
  process.exit(0)
}

await run()
