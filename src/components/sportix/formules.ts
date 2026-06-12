// Données des 5 formules Beauregard (contenu réel du site actuel).
// Source unique pour les pages Tarifs et Contact. À brancher sur Payload (collection
// `formules`) ultérieurement.
export const MENSUEL = [
  { name: 'FORME', price: '49 €', period: '/mois', desc: 'Pour démarrer en douceur.', features: ['1 cours collectif / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'GOLD', price: '59 €', period: '/mois', desc: 'Pour progresser à votre rythme.', features: ['2 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'PRESTIGE', price: '69 €', period: '/mois', desc: 'Pour les plus assidus.', features: ['3 cours collectifs / semaine', 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'HYBRID', price: '69 €', period: '/mois', desc: 'HYROX & Cross Training.', features: ["Accès aux cours d'HYROX et Cross Training", 'Accès salle de musculation', 'Bilan forme offert'] },
  { name: 'VIP', price: '99 €', period: '/mois', desc: "L'accès illimité, sans compromis.", features: ['Accès illimité', 'Accès salle de musculation', 'Bilan forme offert'] },
]

// Courtes durées (packs sans engagement reconductible) + tickets à la séance.
// Contenu réel du site actuel : 3 mois 300 €, 6 mois 600 €, ticket 20 €, carnets 180 € / 480 €.
export const COURTES = [
  { name: '3 MOIS', price: '300 €', period: '/3 mois', desc: 'Accès complet, sans reconduction.', features: ['Accès salle de musculation', 'Cours collectifs inclus', 'Bilan forme offert'] },
  { name: '6 MOIS', price: '600 €', period: '/6 mois', desc: 'Six mois pour ancrer la routine.', features: ['Accès salle de musculation', 'Cours collectifs inclus', 'Bilan forme offert'] },
  { name: 'TICKET', price: '20 €', period: '/séance', desc: 'La séance à l’unité, sans engagement.', features: ['1 séance', 'Accès salle ou cours collectif', 'Sans abonnement'] },
  { name: 'CARNET 10', price: '180 €', period: '/10 séances', desc: 'Soit 18 € la séance.', features: ['10 séances', 'Accès salle ou cours collectif', 'Valable sans limite de temps'] },
  { name: 'CARNET 30', price: '480 €', period: '/30 séances', desc: 'Soit 16 € la séance — le meilleur tarif.', features: ['30 séances', 'Accès salle ou cours collectif', 'Valable sans limite de temps'] },
]
