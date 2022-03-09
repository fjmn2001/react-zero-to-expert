import "./index.css"

interface FirstAppProps {
  greeting: string
}

const FirstApp = ({ greeting }: FirstAppProps) => {
  const numbers = 123
  const user = {
    name: "Francisco",
  }

  return (
    <>
      <h1>{greeting}</h1>
      <h1>{numbers}</h1>
      <pre>{JSON.stringify(user)}</pre>
    </>
  )
}

export default FirstApp
