import { useEffect, useRef, useState } from "react"

const useFetch = (url: string) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ loading: false, error: null, data: null })

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        isMounted.current &&
          setState({
            loading: false,
            error: null,
            data,
          })
      })
      .catch((e) => {
        setState({
          loading: false,
          error: e.message,
          data: null,
        })
      })
  }, [url])

  return state
}

export default useFetch
