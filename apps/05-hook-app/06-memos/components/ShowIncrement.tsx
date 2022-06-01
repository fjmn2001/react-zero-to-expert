import { memo } from "react"

const ShowIncrement = memo(
  ({ increment }: { increment: (num: number) => void }) => {
    return (
      <button className={"btn btn-primary"} onClick={() => increment(5)}>
        Increment
      </button>
    )
  }
)

ShowIncrement.displayName = "ShowIncrement"

export default ShowIncrement
