import { UserContext } from "../components/UserContext"
import { useContext } from "react"

const Home = () => {
  const { user } = useContext(UserContext)!
  console.log(user)

  return (
    <>
      <h1>Home</h1>
      <hr />

      <pre className={"container"}>{JSON.stringify(user, null, 4)}</pre>
    </>
  )
}

export default Home
