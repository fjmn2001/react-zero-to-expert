import { useCounter } from "../../01-useState/hooks/useCounter"
import { useMemo, useState } from "react"

import "./memorize.css"
import { heavyProcess } from "../helpers/heavyProcess"

const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const [show, setShow] = useState(true)

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoHeavyProcess}</p>

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

export default MemoHook
