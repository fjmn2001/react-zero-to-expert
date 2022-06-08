import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "../../../auth/views/LoginView"
import DashboardRoutes from "./DashboardRoutes"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginView /> } />
        <Route path={ "/*" } element={ <DashboardRoutes /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
