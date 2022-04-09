import Child from "./Child"
import { useCallback, useState } from "react"

import "./parent.css"

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10]
  const [value, setValue] = useState(0)

  const increment = useCallback(
    (num: number) => {
      setValue((value) => value + num)
    },
    [setValue]
  )

  return (
    <div>
      <h1>Parent</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Child key={n} counter={n} increment={increment} />
      ))}
    </div>
  )
}
