import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Créneaux du planning des cours collectifs. Une ligne = un créneau (jour, salle,
// heure, cours). La page /planning les regroupe par jour puis par salle.
// Le client édite ses créneaux depuis l'admin.
export const Planning: CollectionConfig = {
  slug: 'planning',
  labels: { singular: 'Créneau', plural: 'Planning' },
  admin: {
    useAsTitle: 'cours',
    defaultColumns: ['jour', 'salle', 'heure', 'cours', 'ordre', 'actif'],
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
      name: 'jour',
      label: 'Jour',
      type: 'select',
      required: true,
      options: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((j) => ({ label: j, value: j })),
    },
    {
      name: 'salle',
      label: 'Salle',
      type: 'select',
      required: true,
      options: [
        { label: 'Salle Fitness', value: 'Salle Fitness' },
        { label: 'Salle Cross', value: 'Salle Cross' },
        { label: 'Bulle', value: 'Bulle' },
      ],
    },
    {
      name: 'heure',
      label: 'Heure',
      type: 'text',
      admin: { description: 'Ex. : 10h, 9h15, 17h30. Laisser vide si le créneau est sans horaire.' },
    },
    { name: 'cours', label: 'Cours', type: 'text', required: true },
    {
      name: 'duree',
      label: 'Durée (minutes)',
      type: 'number',
      defaultValue: 60,
      min: 15,
      max: 600,
      admin: {
        position: 'sidebar',
        description: 'Durée du cours en minutes. 60 par défaut, ajustable créneau par créneau.',
      },
    },
    {
      name: 'ordre',
      label: "Ordre d'affichage",
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Ordre du créneau dans sa salle' },
    },
    {
      name: 'actif',
      label: 'Actif',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
