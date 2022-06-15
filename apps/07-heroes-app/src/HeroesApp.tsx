import AppRouter from "./shared/components/router/AppRouter"
import { AuthProvider } from "./auth/contexts/AuthContext"

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
export default HeroesApp
