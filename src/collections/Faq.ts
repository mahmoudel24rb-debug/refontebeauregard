import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Questions fréquentes affichées sur la page /faq (accordéons + JSON-LD FAQPage).
export const Faq: CollectionConfig = {
  slug: 'faq',
  labels: { singular: 'Question fréquente', plural: 'FAQ' },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'ordre'],
    group: 'Contenu',
  },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'question', label: 'Question', type: 'text', required: true },
    { name: 'reponse', label: 'Réponse', type: 'textarea', required: true },
    {
      name: 'ordre',
      label: "Ordre d'affichage",
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
