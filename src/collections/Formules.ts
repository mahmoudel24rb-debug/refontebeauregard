import type { CollectionConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Tarifs : abonnements mensuels (FORME → VIP), courtes durées (3/6 mois) et tickets
export const Formules: CollectionConfig = {
  slug: 'formules',
  labels: { singular: 'Formule', plural: 'Formules' },
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'type', 'prix', 'ordre'],
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
      admin: { description: 'Ex. : FORME, GOLD, PRESTIGE, HYBRID, VIP, 3 mois, Ticket unité…' },
    },
    {
      name: 'type',
      label: 'Type de formule',
      type: 'select',
      required: true,
      defaultValue: 'mensuelle',
      options: [
        { label: 'Abonnement mensuel', value: 'mensuelle' },
        { label: 'Courte durée', value: 'courte-duree' },
        { label: 'Ticket / carnet', value: 'ticket' },
      ],
    },
    {
      name: 'prix',
      label: 'Prix (€)',
      type: 'number',
      required: true,
    },
    {
      name: 'suffixePrix',
      label: 'Suffixe du prix',
      type: 'text',
      defaultValue: '/mois',
      admin: { description: 'Ex. : « /mois », « les 3 mois », « les 10 tickets ». Laisser vide si aucun' },
    },
    {
      name: 'accroche',
      label: 'Accroche',
      type: 'text',
      admin: { description: 'Courte phrase sous le prix, ex. : « Pour démarrer en toute liberté »' },
    },
    {
      name: 'avantages',
      label: 'Avantages inclus',
      type: 'array',
      labels: { singular: 'Avantage', plural: 'Avantages' },
      fields: [{ name: 'texte', label: 'Texte', type: 'text', required: true }],
    },
    {
      name: 'misEnAvant',
      label: 'Mettre en avant',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Carte mise en valeur visuellement (une seule à la fois idéalement)' },
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
