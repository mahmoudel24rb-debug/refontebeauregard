import type { Access } from 'payload'

// Lecture publique : le front Next.js consomme ces contenus sans authentification
export const publicRead: Access = () => true

// Écriture réservée aux utilisateurs connectés (admin DGL ou éditeur client)
export const authenticated: Access = ({ req: { user } }) => Boolean(user)

// Réservé au rôle admin (gestion des utilisateurs, redirections, formulaires)
export const adminOnly: Access = ({ req: { user } }) => user?.role === 'admin'
