import { heroes } from "../../shared/data/heroes"
import { Hero } from "../types"

const getHeroesByName = (name: string): Array<Hero> => {
  if (name === "") {
    return []
  }

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  )
}

export default getHeroesByName
