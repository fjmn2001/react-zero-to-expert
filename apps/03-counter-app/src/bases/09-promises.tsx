import { getHeroById } from "./08-import"
import { Hero } from "../data/heroes"

export const getHeroByIdAsync = (id: number) => {
  return new Promise<Hero>((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)

      return hero
        ? resolve(hero)
        : reject(new Error(`Hero ${id} does not exists.`))
    })
  })
}
