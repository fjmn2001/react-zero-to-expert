import { ChangeEvent, useState } from "react"

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [target.name]: target.value })
  }

  return [values, handleInputChange] as [
    object,
    ({ target }: ChangeEvent<HTMLInputElement>) => void
  ]
}

export default useForm
