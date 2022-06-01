import "./index.css"

interface FirstAppProps {
  greeting: string
  subtitle?: string
}

const FirstApp = ({
  greeting,
  subtitle = "I am a subtitle",
}: FirstAppProps) => {
  const numbers = 123
  const user = {
    name: "Francisco",
  }

  return (
    <>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
      <h1>{numbers}</h1>
      <pre>{JSON.stringify(user)}</pre>
    </>
  )
}

export default FirstApp
