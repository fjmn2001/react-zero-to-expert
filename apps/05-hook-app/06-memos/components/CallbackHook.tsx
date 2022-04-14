import "./callback-hook.css"
import { useCallback, useEffect, useState } from "react"
import ShowIncrement from "./ShowIncrement"

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback(
    (num: number) => {
      setCounter((counter) => counter + num)
    },
    [setCounter]
  )

  useEffect(() => {
    // do nothing
  }, [increment])

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  )
}

export default CallbackHook
