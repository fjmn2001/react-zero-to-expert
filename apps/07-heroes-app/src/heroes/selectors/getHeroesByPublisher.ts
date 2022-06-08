import { heroes } from "../../shared/data/heroes"
import { Publisher } from "../types"

export const getHeroesByPublisher = (publisher: Publisher) => {
  return heroes.filter((e) => e.publisher === publisher)
}
