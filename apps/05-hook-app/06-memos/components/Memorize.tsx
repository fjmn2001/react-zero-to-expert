import { useCounter } from "../../01-useState/hooks/useCounter"
import Small from "./Small"
import { useState } from "react"

import "./memorize.css"

const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className={"btn btn-primary"} onClick={() => increment()}>
        +1
      </button>

      <button
        className={"btn btn-outline-primary ml-3"}
        onClick={() => setShow(!show)}
      >
        Toggle Show
      </button>
    </>
  )
}

export default Memorize
