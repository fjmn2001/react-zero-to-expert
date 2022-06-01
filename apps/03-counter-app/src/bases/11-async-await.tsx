import axios from "axios"

const apiKey = "g13oXIzvbtzxNnCw6hjWVR31UjL0yGVw"

export const getImage = async (): Promise<string | Error> => {
  try {
    const response = await axios(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = response.data
    const { url } = data.images.original

    return url
  } catch (error) {
    return error as Error
  }
}
