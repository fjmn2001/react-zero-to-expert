import { memo } from "react"

interface Props {
  counter: number
  increment: (number: number) => void
}

const Child = memo(({ counter, increment }: Props) => {
  console.log("  Me volví a generar :(  ")

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(counter)}>
      {counter}
    </button>
  )
})

Child.displayName = "Child"

export default Child
