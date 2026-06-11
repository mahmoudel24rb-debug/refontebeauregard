import type { GlobalConfig } from 'payload'

import { authenticated, publicRead } from '../access'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Pied de page',
  admin: { group: 'Mise en page' },
  access: {
    read: publicRead,
    update: authenticated,
  },
  fields: [
    {
      name: 'baseline',
      label: 'Baseline',
      type: 'text',
      admin: { description: 'Phrase sous le logo, ex. : « Nature + coaching à Rochecorbon »' },
    },
    {
      name: 'colonnes',
      label: 'Colonnes de liens',
      type: 'array',
      labels: { singular: 'Colonne', plural: 'Colonnes' },
      fields: [
        { name: 'titre', label: 'Titre', type: 'text', required: true },
        {
          name: 'liens',
          label: 'Liens',
          type: 'array',
          labels: { singular: 'Lien', plural: 'Liens' },
          fields: [
            { name: 'label', label: 'Libellé', type: 'text', required: true },
            { name: 'url', label: 'URL', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'mentionsBas',
      label: 'Mention en bas de page',
      type: 'text',
      defaultValue: '© Parc Beauregard Fitness & Coaching — Tous droits réservés',
    },
  ],
}
