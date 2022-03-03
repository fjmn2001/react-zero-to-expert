import { getHeroById } from "./08-import"
import { Hero } from "../data/heroes"

const getHeroByIdAsync = () => {
  return new Promise<Hero>((resolve, reject) => {
    setTimeout(() => {
      const heroId = 2
      const hero = getHeroById(heroId)

      return hero
        ? resolve(hero)
        : reject(new Error(`Hero ${heroId} does not exists.`))
    }, 2000)
  })
}

console.log(getHeroByIdAsync)

getHeroByIdAsync()
  .then((hero: Hero) => {
    console.log(`Then of promise. ${hero.name}`)
  })
  .catch(console.log)
