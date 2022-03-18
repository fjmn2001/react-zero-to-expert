const apiKey = "g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw"

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(
    category
  )}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()

  return data.map(
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
}
