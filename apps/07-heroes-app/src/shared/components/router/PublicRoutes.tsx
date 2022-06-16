import React from "react"
import { useAuthContext } from "../../../auth/contexts/AuthContext"
import { Navigate } from "react-router-dom"

interface Props {
  children: React.ReactElement
}

const PublicRoutes = ({ children }: Props) => {
  const { authState } = useAuthContext()

  if (authState.logged) {
    return <Navigate to={"/"} />
  }

  return children
}

export default PublicRoutes
