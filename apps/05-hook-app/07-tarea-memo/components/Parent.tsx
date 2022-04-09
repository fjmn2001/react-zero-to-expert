import { Child } from "./Child"
import { useState } from "react"

import "./parent.css"

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10]
  const [value, setValue] = useState(0)

  const increment = (num: number) => {
    setValue(value + num)
  }

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
