import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path={"/about"} element={<About />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Home />} />

          <Route path={"*"} element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter
