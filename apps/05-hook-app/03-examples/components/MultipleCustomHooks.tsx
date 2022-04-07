import "./examples.css"
import useFetch from "../hooks/useFetch"
import { useCounter } from "../../01-useState/hooks/useCounter"

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  )
  const { author, quote } = (!!data && data[0]) as unknown as {
    author: string | undefined
    quote: string | undefined
  }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className={"alert alert-info text-center"}>Loading...</div>
      ) : (
        <blockquote className={"blockquote text-right"}>
          <p className={"blockquote-body"}>{quote}</p>
          <footer className={"blockquote-footer"}>{author}</footer>
        </blockquote>
      )}

      <button className={"btn btn-primary"} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  )
}

export default MultipleCustomHooks
