import GifGridItem from "./GifGridItem"
import { useFetchGif } from "./useFetchGif"

const GifGrid = ({ category }: { category: string }) => {
  const { data: images, loading } = useFetchGif(category)

  return (
    <>
      <h3 className={"animate__animated animate__fadeIn"}>{category}</h3>
      {loading && (
        <p className={"animate__animated animate__flash"}>Loading...</p>
      )}
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
