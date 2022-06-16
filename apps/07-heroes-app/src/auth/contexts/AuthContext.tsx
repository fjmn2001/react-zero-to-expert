import React, { createContext, useContext, useReducer } from "react"
import authReducer from "../reducers/authReducer"
import { types } from "../types/types"

const initialState: {
  logged: boolean
  name: string | null
} = {
  logged: JSON.parse(localStorage.getItem("logged") ?? "false"),
  name: localStorage.getItem("name"),
}

export const AuthContext = createContext({
  authState: initialState,
  login: (name: string) => {
    console.log(name)
  },
  logout: () => {},
})

export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (name: string) => {
    localStorage.setItem("logged", "true")
    localStorage.setItem("name", name)

    dispatch({ type: types.login, payload: name })
  }

  const logout = () => {
    localStorage.removeItem("logged")
    localStorage.removeItem("name")

    dispatch({ type: types.logout, payload: "" })
  }

  return (
    <AuthContext.Provider value={{ authState: state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
