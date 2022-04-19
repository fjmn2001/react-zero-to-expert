import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Invoice from "./pages/Invoice"

const ReactRouterApp = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <hr />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/invoice/:invoiceId"} element={<Invoice />}></Route>
      </Routes>
    </>
  )
}

export default ReactRouterApp
