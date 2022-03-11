const apiKey = "g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw"
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

request
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original

    return url
  })
  .catch(console.error)
