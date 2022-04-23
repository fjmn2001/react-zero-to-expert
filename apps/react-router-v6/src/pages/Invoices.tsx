import useInvoices from "../hooks/useInvoices"
import { NavLink, Outlet, useSearchParams } from "react-router-dom"

const Invoices = () => {
  const { invoices } = useInvoices()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get("filter")
            if (!filter) return true
            const name = invoice.name.toLowerCase()
            return name.indexOf(filter.toLowerCase()) !== -1
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                }
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default Invoices
