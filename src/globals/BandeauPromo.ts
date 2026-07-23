import type { GlobalConfig } from 'payload'

import { authenticated, publicRead } from '../access'

// Badge promo affiché dans le hero de la page d'accueil (petite pastille élégante,
// pas une barre d'annonce). Éditable / désactivable par le client.
export const BandeauPromo: GlobalConfig = {
  slug: 'bandeau-promo',
  label: 'Badge promo (accueil)',
  admin: { group: 'Mise en page' },
  access: {
    read: publicRead,
    update: authenticated,
  },
  fields: [
    {
      name: 'actif',
      label: 'Afficher le badge promo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'titre',
      label: 'Texte du badge',
      type: 'text',
      admin: { description: 'Court : il s’affiche dans une pastille du hero. Ex. : « 1ʳᵉ séance offerte »' },
    },
    {
      name: 'texte',
      label: 'Texte long (optionnel, non affiché pour l’instant)',
      type: 'textarea',
    },
    {
      name: 'cta',
      label: 'Lien du badge',
      type: 'group',
      fields: [
        { name: 'label', label: 'Libellé (non utilisé par le badge)', type: 'text', defaultValue: 'En profiter' },
        { name: 'url', label: 'URL de destination', type: 'text', defaultValue: '/contact' },
      ],
    },
  ],
}
