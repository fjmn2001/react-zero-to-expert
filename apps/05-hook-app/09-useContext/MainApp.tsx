import AppRouter from "./AppRouter"
import { UserContext } from "./components/UserContext"
import { useState } from "react"
import { User } from "./types"

const MainApp = () => {
  const [user, setUser] = useState<User | {}>({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter></AppRouter>
    </UserContext.Provider>
  )
}

export default MainApp
