import { useEffect, useState } from "react"
import { Image } from "./types"
import GifGridItem from "./GifGridItem"
import { getGifs } from "./getGif"

const GifGrid = ({ category }: { category: string }) => {
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    getGifs(category).then(setImages)
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <div className={"card-grid"}>
        <ol>
          {images.map((image) => (
            <GifGridItem key={image.id} image={image} />
          ))}
        </ol>
      </div>
    </>
  )
}

export default GifGrid
