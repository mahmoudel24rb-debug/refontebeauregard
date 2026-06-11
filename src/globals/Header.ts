import type { GlobalConfig } from 'payload'

import { authenticated, publicRead } from '../access'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'En-tête',
  admin: { group: 'Mise en page' },
  access: {
    read: publicRead,
    update: authenticated,
  },
  fields: [
    {
      name: 'navigation',
      label: 'Liens de navigation',
      type: 'array',
      labels: { singular: 'Lien', plural: 'Liens' },
      fields: [
        { name: 'label', label: 'Libellé', type: 'text', required: true },
        { name: 'url', label: 'URL', type: 'text', required: true },
      ],
    },
    {
      name: 'cta',
      label: "Bouton d'action",
      type: 'group',
      fields: [
        { name: 'label', label: 'Libellé', type: 'text', defaultValue: 'Nous rejoindre' },
        { name: 'url', label: 'URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
