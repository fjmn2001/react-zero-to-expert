import { render } from "react-dom"

import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactRouterApp from "./ReactRouterApp"
import Expenses from "./pages/Expenses"
import Invoices from "./pages/Invoices"

render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ReactRouterApp />}>
        <Route path={"expenses"} element={<Expenses />} />
        <Route path={"invoices"} element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
