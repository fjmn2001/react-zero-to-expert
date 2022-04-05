import "./counter.css"
import { useState } from "react"

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  })
  const { counter1, counter2 } = state
  const handleIncrement = () =>
    setState((counter) => ({
      ...counter,
      counter1: counter1 + 1,
    }))

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button onClick={handleIncrement} className={"btn btn-primary"}>
        +1
      </button>
    </>
  )
}

export default CounterApp
