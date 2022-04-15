import { createContext, Dispatch } from "react"
import { User } from "../types"

interface UserContextValue {
  user: User | {}
  setUser: (user: Dispatch<User> | User | {}) => void
}

export const UserContext = createContext<UserContextValue>({
  user: {},
  setUser: () => {},
})
