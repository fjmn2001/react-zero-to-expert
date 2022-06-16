import React from "react"
import { useAuthContext } from "../../../auth/contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

interface Props {
  children: React.ReactElement
}

const PrivateRoutes = ({ children }: Props) => {
  const { authState } = useAuthContext()
  const { pathname, search } = useLocation()

  const lastPath = `${pathname}${search}`
  localStorage.setItem("lastPath", lastPath)

  if (!authState.logged) {
    return <Navigate to={"/login"} />
  }

  return children
}

export default PrivateRoutes
