/**
 * Choisit la classe de grille flex pour n cards, avec cmax colonnes au maximum.
 * Règle : n divisible par cmax -> cmax colonnes ; sinon n pair dont la moitié
 * tient dans cmax -> n / 2 colonnes (4 cards = 2x2) ; sinon cmax colonnes, la
 * dernière rangée incomplète étant centrée par justify-content (5 = 3 + 2).
 */
export function classeGrille(n: number, cmax: 2 | 3 = 3): string {
  let colonnes: number = cmax
  if (n > 0 && n % cmax === 0) {
    colonnes = cmax
  } else if (n > 0 && n % 2 === 0 && n / 2 <= cmax) {
    colonnes = n / 2
  }
  return colonnes <= 2 ? 'bg-grille bg-grille-2' : 'bg-grille bg-grille-3'
}
