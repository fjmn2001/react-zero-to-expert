import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher"
import { Publisher } from "../types"

interface Props {
  publisher: Publisher
}

const HeroList = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  )
}

export default HeroList
