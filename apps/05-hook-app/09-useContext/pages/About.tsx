import { useContext } from "react"
import { UserContext } from "../components/UserContext"
import { useNavigate } from "react-router-dom"

const About = () => {
  const { setUser } = useContext(UserContext)!
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser({})
    navigate("/login")
  }

  return (
    <>
      <h1>About</h1>
      <hr />

      <button className={"btn btn-danger"} onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default About
