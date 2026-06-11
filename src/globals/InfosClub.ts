import type { GlobalConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Source unique de vérité pour les coordonnées : réutilisées dans le footer,
// la page contact, le SEO local (schema.org) et les pages légales
export const InfosClub: GlobalConfig = {
  slug: 'infos-club',
  label: 'Infos club',
  admin: { group: 'Mise en page' },
  access: {
    read: publicRead,
    update: authenticated,
  },
  fields: [
    {
      name: 'nom',
      label: 'Nom du club',
      type: 'text',
      defaultValue: 'Parc Beauregard Fitness & Coaching',
    },
    {
      name: 'adresse',
      label: 'Adresse',
      type: 'text',
      defaultValue: '1 quai de la Loire, 37210 Rochecorbon',
    },
    {
      name: 'telephone',
      label: 'Téléphone',
      type: 'text',
      defaultValue: '02 47 44 41 43',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      defaultValue: 'rochecorbon@parcbeauregard.com',
    },
    {
      name: 'reseaux',
      label: 'Réseaux sociaux',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          label: 'Facebook',
          type: 'text',
          defaultValue: 'https://www.facebook.com/parcbeauregard',
        },
        {
          name: 'instagram',
          label: 'Instagram',
          type: 'text',
          defaultValue: 'https://www.instagram.com/parcbeauregard',
        },
      ],
    },
    {
      name: 'horaires',
      label: 'Horaires',
      type: 'array',
      labels: { singular: 'Plage horaire', plural: 'Plages horaires' },
      admin: { description: 'Ex. : « Lundi – Vendredi » / « 9h00 – 21h00 »' },
      fields: [
        { name: 'jours', label: 'Jours', type: 'text', required: true },
        { name: 'heures', label: 'Heures', type: 'text', required: true },
      ],
    },
  ],
}
