// Données des 5 formules Beauregard (contenu réel du site actuel).
// Source unique pour les pages Tarifs et Contact. À brancher sur Payload (collection
// `formules`) ultérieurement.
export const MENSUEL = [
  { name: 'FORME', price: '49 €', period: '/mois', desc: 'Pour démarrer en douceur.', features: ['1 cours collectif / semaine', 'Accès salle de musculation'] },
  { name: 'GOLD', price: '59 €', period: '/mois', desc: 'Pour progresser à votre rythme.', features: ['2 cours collectifs / semaine', 'Accès salle de musculation'] },
  { name: 'PRESTIGE', price: '69 €', period: '/mois', desc: 'Pour les plus assidus.', features: ['3 cours collectifs / semaine', 'Accès salle de musculation'] },
  { name: 'HYBRID', price: '59 €', period: '/mois', desc: 'Illimité Hyrox, Cross Training & Boxe.', features: ['Accès illimité aux cours Hyrox, Cross Training et Boxe', 'Accès salle de musculation'] },
  { name: 'VIP', price: '99 €', period: '/mois', desc: "L'accès illimité, sans compromis.", features: ['Accès illimité', 'Accès salle de musculation'] },
]

// Courtes durées (packs sans engagement reconductible) + tickets à la séance.
// Contenu réel du site actuel : 3 mois 300 €, 6 mois 600 €, ticket 20 €, carnets 180 € / 480 €.
export const COURTES = [
  { name: '3 MOIS', price: '300 €', period: '/3 mois', desc: 'Illimité fitness classique.', features: ['Accès salle de musculation', 'Cours collectifs inclus', 'Hors Hyrox / Boxe / Cross Training'] },
  { name: '6 MOIS', price: '600 €', period: '/6 mois', desc: 'Illimité fitness classique.', features: ['Accès salle de musculation', 'Cours collectifs inclus', 'Hors Hyrox / Boxe / Cross Training'] },
  { name: 'TICKET', price: '20 €', period: '/séance', desc: 'La séance à l’unité, sans engagement.', features: ['1 séance', 'Accès salle ou cours collectif', 'Sans abonnement'] },
  { name: 'CARNET 10', price: '180 €', period: '/10 séances', desc: 'Soit 18 € la séance.', features: ['10 séances', 'Accès salle ou cours collectif', 'Valable 6 mois'] },
  { name: 'CARNET 30', price: '480 €', period: '/30 séances', desc: 'Soit 16 € la séance — le meilleur tarif.', features: ['30 séances', 'Accès salle ou cours collectif', 'Valable 12 mois'] },
]
