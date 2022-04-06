import "./effects.css"
import useForm from "../hooks/useForm"
import { FormEvent } from "react"

interface formValues {
  name: string
  email: string
  password: string
}

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  })
  const { name, email, password } = formValues as formValues

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />

      <div className={"form-group"}>
        <input
          type="text"
          name={"name"}
          className={"form-control"}
          placeholder={"Your name"}
          autoComplete={"off"}
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className={"form-group"}>
        <input
          type="text"
          name={"email"}
          className={"form-control"}
          placeholder={"Your email"}
          autoComplete={"off"}
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className={"form-group"}>
        <input
          type="password"
          name={"password"}
          className={"form-control"}
          placeholder={"***"}
          autoComplete={"off"}
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className={"btn btn-primary"}>Save</button>
    </form>
  )
}

export default FormWithCustomHook
