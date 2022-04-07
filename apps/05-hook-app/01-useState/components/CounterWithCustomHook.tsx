import "./counter.css"
import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter()
  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />

      <button className={"btn btn-primary"} onClick={() => increment()}>
        +1
      </button>
      <button className={"btn btn-primary"} onClick={reset}>
        Reset
      </button>
      <button className={"btn btn-primary"} onClick={() => decrement()}>
        -1
      </button>
    </>
  )
}

export default CounterWithCustomHook
