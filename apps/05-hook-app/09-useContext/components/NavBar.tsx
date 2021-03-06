import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to={"/"}>
        useContext
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              className="nav-link"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              className="nav-link"
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              className="nav-link"
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
