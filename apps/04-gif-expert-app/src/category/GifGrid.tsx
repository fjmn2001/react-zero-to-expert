import GifGridItem from "./GifGridItem"
import { useFetchGif } from "./useFetchGif"

const GifGrid = ({ category }: { category: string }) => {
  const { data: images, loading } = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      {loading && "Loading..."}
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
