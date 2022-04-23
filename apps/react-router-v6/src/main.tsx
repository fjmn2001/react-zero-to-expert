import { render } from "react-dom"

import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactRouterApp from "./ReactRouterApp"
import Expenses from "./pages/Expenses"
import Invoices from "./pages/Invoices"
import Invoice from "./pages/Invoice"

render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ReactRouterApp />}>
        <Route path={"expenses"} element={<Expenses />} />
        <Route path={"invoices"} element={<Invoices />}>
          <Route path={":invoiceId"} element={<Invoice />} />
        </Route>
        <Route
          path={"*"}
          element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here!</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
