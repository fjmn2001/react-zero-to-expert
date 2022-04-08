import "./../css/index.css"
import { useRef } from "react"

const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocus = () => {
    inputRef.current?.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        className={"form-control"}
        placeholder={"Your name"}
        ref={inputRef}
      />

      <button className={"btn btn-outline-primary mt-5"} onClick={handleFocus}>
        Focus
      </button>
    </>
  )
}

export default FocusScreen
