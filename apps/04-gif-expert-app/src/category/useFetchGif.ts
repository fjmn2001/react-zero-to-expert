import { useEffect, useState } from "react"
import { getGifs } from "./getGif"
import { Image } from "./types"

export const useFetchGif = (category: string) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((images) =>
      setState({
        data: images,
        loading: false,
      })
    )
  }, [category])

  return state as { data: Image[]; loading: boolean }
}
