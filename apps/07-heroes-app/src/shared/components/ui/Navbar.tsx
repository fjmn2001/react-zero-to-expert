import { Link, NavLink, useNavigate } from "react-router-dom"
import { LOGIN } from "../../../auth/config/router/paths"
import { useAuthContext } from "../../../auth/contexts/AuthContext"

const Navbar = () => {
  const navigate = useNavigate()
  const { logout, authState } = useAuthContext()

  const handleLogout = () => {
    logout()
    navigate(LOGIN, {
      replace: true,
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {authState.name && (
            <span className={"nav-item nav-link text-info"}>
              {authState.name}
            </span>
          )}
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
