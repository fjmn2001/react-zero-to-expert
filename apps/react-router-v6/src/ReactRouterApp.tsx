import { Link, Outlet } from "react-router-dom"

const ReactRouterApp = () => {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <hr />
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to={"/invoices"}>Invoices</Link>
        <Link to={"/expenses"}>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default ReactRouterApp
