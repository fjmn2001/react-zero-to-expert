import MultipleCustomHooks from "../../03-examples/components/MultipleCustomHooks"

import "./../css/index.css"
import { useState } from "react"

const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className={"btn btn-primary mt=5"} onClick={() => setShow(!show)}>
        Toggle
      </button>
    </>
  )
}

export default RealExampleRef
