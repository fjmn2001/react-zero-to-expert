import { useNavigate } from "react-router-dom"
import { HOME } from "../../shared/config/router/paths"
import { useAuthContext } from "../contexts/AuthContext"

const LoginView = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") ?? HOME

    login("Francisco")

    navigate(lastPath, {
      replace: true,
    })
  }

  return (
    <div className={"container mt-5"}>
      <h1>Login View</h1>
      <hr />
      <button className={"btn btn-primary"} onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginView
