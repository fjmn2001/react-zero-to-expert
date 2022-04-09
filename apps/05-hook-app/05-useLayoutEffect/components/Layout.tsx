import { useCounter } from "../../01-useState/hooks/useCounter"
import useFetch from "../../03-examples/hooks/useFetch"

import "./layout.css"
import { useLayoutEffect, useRef, useState } from "react"

const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
  const { quote } = (!!data && data[0]) as unknown as {
    author: string | undefined
    quote: string | undefined
  }
  const pRef = useRef<HTMLParagraphElement | null>(null)
  const [boxSize, setBoxSize] = useState<DOMRect | null | undefined>(null)

  useLayoutEffect(() => {
    setBoxSize(pRef.current?.getBoundingClientRect())
  }, [quote])

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className={"blockquote text-right"}>
        <p className={"blockquote-body"} ref={pRef}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize)}</pre>

      <button className={"btn btn-primary"} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  )
}

export default Layout
