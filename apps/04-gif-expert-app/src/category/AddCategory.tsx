import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react"

const AddCategory = ({
  setCategories,
}: {
  setCategories: Dispatch<SetStateAction<string[]>>
}) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (inputValue.trim().length === 0) {
      return
    }

    setCategories((categories) => [inputValue, ...categories])
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

export default AddCategory
