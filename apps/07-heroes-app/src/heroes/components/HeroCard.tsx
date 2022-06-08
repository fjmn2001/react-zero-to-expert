import { Hero } from "../types"
import { Link } from "react-router-dom"

interface Props {
  hero: Hero
}

const HeroCard = ({ hero }: Props) => {
  const imagePath = `/public/assets/img/${hero.id}.jpg`

  return (
    <div className={"col"}>
      <div className={"card"}>
        <div className={"row g-0"}>
          <div className={"col-md-4"}>
            <img
              className={"img-fluid rounded-start"}
              src={imagePath}
              alt={hero.superhero}
            />
          </div>
          <div className={"col-md-8"}>
            <div className={"card-body"}>
              <h5 className={"card-title"}>{hero.superhero}</h5>
              <p className={"card-text"}>{hero.alter_ego}</p>
              {hero.alter_ego !== hero.characters && (
                <p className={"text-muted"}>{hero.characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link to={`heroes/${hero.id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
