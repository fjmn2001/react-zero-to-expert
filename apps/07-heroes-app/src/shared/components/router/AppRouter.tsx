import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginView from "../../../auth/views/LoginView"
import DashboardRoutes from "./DashboardRoutes"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginView />
            </PublicRoutes>
          }
        />

        <Route
          path={"/*"}
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
