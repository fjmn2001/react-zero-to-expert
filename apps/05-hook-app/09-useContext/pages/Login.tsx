import { useContext } from "react"
import { UserContext } from "../components/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { setUser } = useContext(UserContext)!
  const navigate = useNavigate()

  const handleLogin = () => {
    setUser({
      id: "custom-id",
      name: "Francisco",
      email: "fmarcano@medine.tech",
    })
    navigate("/")
  }

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button className={"btn btn-primary"} onClick={handleLogin}>
        Login
      </button>
    </>
  )
}

export default Login
