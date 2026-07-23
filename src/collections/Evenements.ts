import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Événements du club (soirées, portes ouvertes, compétitions…). Alimentent la
// page /evenements. Le client crée/édite ses événements depuis l'admin.
export const Evenements: CollectionConfig = {
  slug: 'evenements',
  labels: { singular: 'Événement', plural: 'Événements' },
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'date', 'publie'],
    group: 'Contenu',
  },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'titre', label: 'Titre', type: 'text', required: true },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime', displayFormat: 'dd/MM/yyyy HH:mm' } },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      admin: { description: "Court paragraphe de présentation de l'événement" },
    },
    {
      name: 'image',
      label: 'Image (optionnelle)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publie',
      label: 'Publié sur le site',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
