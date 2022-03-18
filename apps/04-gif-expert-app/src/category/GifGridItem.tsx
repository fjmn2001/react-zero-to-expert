import { Image } from "./types"

const GifGridItem = ({ image }: { image: Image }) => {
  const { title, url } = image

  return (
    <div className={"card"}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
