import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Les coachs du club. Éditable par le client (ajout/retrait au fil de l'équipe).
// Les portraits sont prêts ; nom/rôle/bio à compléter avec Bastien.
export const Coachs: CollectionConfig = {
  slug: 'coachs',
  labels: { singular: 'Coach', plural: 'Coachs' },
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'role', 'ordre'],
    group: 'Contenu',
  },
  access: {
    read: publicRead,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'nom', label: 'Nom', type: 'text', admin: { description: 'Ex. : Juan Silva (à compléter avec Bastien)' } },
    { name: 'role', label: 'Rôle / spécialité', type: 'text', admin: { description: 'Ex. : Coach sportif — boxe & cross training' } },
    { name: 'bio', label: 'Bio', type: 'textarea' },
    {
      name: 'photo',
      label: 'Photo (chemin)',
      type: 'text',
      admin: { description: 'Ex. : /assets/beauregard/coach-1.webp (uploads Media à venir)' },
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
