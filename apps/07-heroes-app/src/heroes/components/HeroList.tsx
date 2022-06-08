import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher"
import { Publisher } from "../types"
import HeroCard from "./HeroCard"

interface Props {
  publisher: Publisher
}

const HeroList = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <div className={"row row-cols-1 row-cols-md-3 g-3"}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroList
