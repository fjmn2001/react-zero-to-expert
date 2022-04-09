interface Props {
  counter: number
  increment: (number: number) => void
}

export const Child = ({ counter, increment }: Props) => {
  console.log("  Me volví a generar :(  ")

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(counter)}>
      {counter}
    </button>
  )
}
