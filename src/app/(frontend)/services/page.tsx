import { redirect } from 'next/navigation'

// /services -> redirige vers la page Cours (le « service » principal).
// L'ancienne page « classes » Sportix (8 cours fictifs) est ainsi retirée.
// TODO : pages dédiées Coaching et Location de terrain à créer ensuite.
export default function ServicesPage() {
  redirect('/services/cours')
}
