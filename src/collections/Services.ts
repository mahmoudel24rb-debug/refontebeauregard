import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Les offres du club : Coaching, Cours, location de terrain…
export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'slug', 'ordre'],
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
      name: 'nom',
      label: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Ex. : coaching → /coaching' },
    },
    {
      name: 'accroche',
      label: 'Accroche',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'imagePrincipale',
      label: 'Image principale',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'benefices',
      label: 'Bénéfices',
      type: 'array',
      labels: { singular: 'Bénéfice', plural: 'Bénéfices' },
      fields: [
        { name: 'titre', label: 'Titre', type: 'text', required: true },
        { name: 'texte', label: 'Texte', type: 'textarea' },
      ],
    },
    {
      name: 'espacesLies',
      label: 'Espaces liés',
      type: 'relationship',
      relationTo: 'espaces',
      hasMany: true,
      admin: { description: 'Espaces où ce service est proposé (affichés sur la fiche)' },
    },
    {
      name: 'ordre',
      label: "Ordre d'affichage",
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
