import { memo } from "react"

const Small = memo(({ value }: { value: number }) => {
  return (
    <>
      <small>{value}</small>
    </>
  )
})

Small.displayName = "Small"

export default Small
