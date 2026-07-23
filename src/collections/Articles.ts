import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Articles de blog. Corps en éditeur riche (lexical). Le client rédige depuis
// l'admin. Page /blog (hub) + /blog/[slug] (lecture).
export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: { singular: 'Article', plural: 'Articles' },
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'datePublication', 'publie'],
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
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Ex. : bien-choisir-son-cours → /blog/bien-choisir-son-cours' },
    },
    {
      name: 'extrait',
      label: 'Extrait',
      type: 'textarea',
      admin: { description: 'Résumé court affiché sur la carte du blog et en meta description' },
    },
    { name: 'corps', label: 'Corps de l’article', type: 'richText' },
    {
      name: 'image',
      label: 'Image de couverture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'datePublication',
      label: 'Date de publication',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
    },
    {
      name: 'publie',
      label: 'Publié',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
