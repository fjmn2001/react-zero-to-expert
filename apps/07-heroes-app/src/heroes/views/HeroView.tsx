import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../selectors/getHeroById"
import { useMemo } from "react"

const HeroView = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  if (!id) {
    return `${id} does not exists.`
  }

  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) {
    return <Navigate to={"/"} />
  }

  const imagePath = `/public/assets/img/${hero.id}.jpg`

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className={"row mt-5"}>
      <div className={"col-4"}>
        <img
          src={imagePath}
          alt={hero.superhero}
          className={"img-thumbnail animate__animated animate__fadeInLeft"}
        />
      </div>
      <div className={"col-8 animate__animated animate__fadeIn"}>
        <h3>{hero.superhero}</h3>
        <ul className={"list-group list-group-flush"}>
          <li className={"list-group-item"}>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className={"list-group-item"}>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className={"list-group-item"}>
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className={"mt-3"}>Characters</h5>
        <p>{hero.characters}</p>

        <button className={"btn btn-outline-info"} onClick={handleGoBack}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default HeroView
