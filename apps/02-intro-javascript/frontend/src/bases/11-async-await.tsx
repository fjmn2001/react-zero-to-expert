// @ts-ignore
;(async () => {
  const apiKey = "g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw"

  const getImage = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      )
      const { data } = await response.json()
      const { url } = data.images.original

      const img = document.createElement("img")
      img.src = url

      document.body.append(img)
    } catch (e) {
      console.error(e)
    }
  }

  await getImage()
})()
