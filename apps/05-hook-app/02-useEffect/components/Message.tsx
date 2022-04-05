import { useEffect, useState } from "react"

const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  })
  const { x, y } = coords

  useEffect(() => {
    const mouseMove = ({ x, y }: MouseEvent) => setCoords({ x, y })
    window.addEventListener("mousemove", mouseMove)

    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return (
    <>
      <h1>Message</h1>
      <hr />
      <p>
        {x}-{y}
      </p>
    </>
  )
}

export default Message
