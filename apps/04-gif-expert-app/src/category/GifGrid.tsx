const apiKey = "g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw"

const GifGrid = ({ category }: { category: string }) => {
  const getGifs = async () => {
    const query = "Rick"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(
      ({
        id,
        title,
        images,
      }: {
        id: string
        title: string
        // eslint-disable-next-line camelcase
        images: { downsized_large: { url: string } }
      }) => {
        return { id, title, url: images.downsized_large.url }
      }
    )

    console.log(gifs)
  }

  // id
  // downsize_large
  getGifs()

  return (
    <>
      <h3>Gif Grid</h3>
      <h4>{category}</h4>
    </>
  )
}

export default GifGrid
