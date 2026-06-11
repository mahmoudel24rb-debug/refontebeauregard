import type { GlobalConfig } from 'payload'

import { authenticated, publicRead } from '../access'

export const BandeauPromo: GlobalConfig = {
  slug: 'bandeau-promo',
  label: 'Bandeau promo',
  admin: { group: 'Mise en page' },
  access: {
    read: publicRead,
    update: authenticated,
  },
  fields: [
    {
      name: 'actif',
      label: 'Afficher le bandeau',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'titre',
      label: 'Titre',
      type: 'text',
      admin: { description: 'Ex. : « Offre limitée — 1 séance de coaching offerte »' },
    },
    {
      name: 'texte',
      label: 'Texte',
      type: 'textarea',
    },
    {
      name: 'cta',
      label: "Bouton d'action",
      type: 'group',
      fields: [
        { name: 'label', label: 'Libellé', type: 'text', defaultValue: 'En profiter' },
        { name: 'url', label: 'URL', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
