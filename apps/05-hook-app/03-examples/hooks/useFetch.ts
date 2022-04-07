import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    setState({ loading: false, error: null, data: null })

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        })
      })
  }, [url])

  return state
}

export default useFetch
