import { redirect } from 'next/navigation'

// /services/[slug] : seul /services/cours existe (segment statique). Tout autre
// slug renvoyait l'ancien gabarit Sportix -> on redirige vers la page Cours.
export default function ServicesSlugPage() {
  redirect('/services/cours')
}
