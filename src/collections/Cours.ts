import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Les cours collectifs (Yoga, Pilates, Boxe, HYROX, École du dos…).
export const Cours: CollectionConfig = {
  slug: 'cours',
  labels: { singular: 'Cours', plural: 'Cours' },
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'slug', 'espace', 'ordre'],
    group: 'Contenu',
  },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'nom', label: 'Nom', type: 'text', required: true },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Ex. : yoga → /services/cours/yoga' },
    },
    {
      name: 'accroche',
      label: 'Accroche',
      type: 'text',
      admin: { description: 'Phrase courte affichée sur la carte' },
    },
    { name: 'description', label: 'Description', type: 'textarea' },
    {
      name: 'image',
      label: 'Image (chemin)',
      type: 'text',
      admin: { description: 'Ex. : /assets/beauregard/yoga.webp (uploads Media à venir)' },
    },
    {
      name: 'espace',
      label: 'Espace concerné',
      type: 'text',
      admin: { description: 'Ex. : Espace Cours Collectifs / Espace Fonctionnel' },
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
