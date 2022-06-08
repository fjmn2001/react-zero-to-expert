import { heroes } from "../../shared/data/heroes"

export const getHeroById = (id: string) => {
  return heroes.find((e) => e.id === id)
}
