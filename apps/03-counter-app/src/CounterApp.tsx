import "./index.css"
import { useState } from "react"

const CounterApp = ({ value = 0 }: { value?: number }) => {
  const [counter, setCounter] = useState(value)

  const handleIncrement = () => {
    setCounter((counter) => counter + 1)
  }
  const handleReset = () => {
    setCounter(() => value)
  }
  const handleDecrement = () => {
    setCounter((counter) => counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  )
}

export default CounterApp
