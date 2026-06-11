import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

export const Temoignages: CollectionConfig = {
  slug: 'temoignages',
  labels: { singular: 'Témoignage', plural: 'Témoignages' },
  admin: {
    useAsTitle: 'auteur',
    defaultColumns: ['auteur', 'note', 'visible'],
    group: 'Contenu',
  },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'auteur',
      label: 'Auteur',
      type: 'text',
      required: true,
    },
    {
      name: 'texte',
      label: 'Témoignage',
      type: 'textarea',
      required: true,
    },
    {
      name: 'note',
      label: 'Note (1 à 5)',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'visible',
      label: 'Visible sur le site',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
