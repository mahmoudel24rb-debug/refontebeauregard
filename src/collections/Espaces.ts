import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Les espaces physiques du club : cours collectifs, fonctionnel, cross-cardio, kid fitness
export const Espaces: CollectionConfig = {
  slug: 'espaces',
  labels: { singular: 'Espace', plural: 'Espaces' },
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
      admin: { description: 'Ex. : cours-collectifs → /espaces/cours-collectifs' },
    },
    {
      name: 'accroche',
      label: 'Accroche',
      type: 'text',
      admin: { description: 'Une phrase courte affichée sur la carte et le hero de la fiche' },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image (chemin)',
      type: 'text',
      admin: { description: 'Ex. : /assets/beauregard/cardio.webp (uploads Media à venir)' },
    },
    {
      name: 'lien',
      label: 'Lien de la carte',
      type: 'text',
      admin: { description: 'Ex. : /espaces/fonctionnel ou /cours' },
    },
    {
      name: 'pageDetail',
      label: 'A une fiche détail',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Si coché, /espaces/[slug] affiche une fiche ; sinon la carte renvoie ailleurs (cf. Lien)' },
    },
    {
      name: 'imagePrincipale',
      label: 'Image principale (Media)',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optionnel : remplacera le chemin texte quand les vraies photos seront uploadées' },
    },
    {
      name: 'galerie',
      label: 'Galerie photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'pointsCles',
      label: 'Points clés',
      type: 'array',
      labels: { singular: 'Point clé', plural: 'Points clés' },
      admin: { description: 'Ex. : Yoga, Pilates, École du dos, ou équipements de la zone' },
      fields: [{ name: 'texte', label: 'Texte', type: 'text', required: true }],
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
