import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher"
import { Publisher } from "../types"
import HeroCard from "./HeroCard"
import { useMemo } from "react"

interface Props {
  publisher: Publisher
}

const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div
      className={
        "row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn"
      }
    >
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroList
