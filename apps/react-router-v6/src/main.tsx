import { render } from "react-dom"

import "./index.css"
import { BrowserRouter } from "react-router-dom"
import ReactRouterApp from "./ReactRouterApp"

render(
  <BrowserRouter>
    <ReactRouterApp />
  </BrowserRouter>,
  document.getElementById("root")
)
