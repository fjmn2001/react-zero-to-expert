import { FormEvent } from "react"
import useForm from "../../02-useEffect/hooks/useForm"
import { Todo } from "../types"

interface TodoAddProps {
  handleAddTodo: (newTodo: Todo) => void
}

interface FormValues {
  description: string
}

const TodoAdd = ({ handleAddTodo }: TodoAddProps) => {
  const [{ description }, handleInputChanges, resetFormValue] =
    useForm<FormValues>({
      description: "",
    })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (description.trim().length === 0) {
      return
    }

    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      description,
      done: false,
    }
    handleAddTodo(newTodo)

    resetFormValue()
  }

  return (
    <>
      <h4>Add Todo</h4>
      <hr />

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name={"description"}
          className={"form-control"}
          placeholder={"learn..."}
          autoComplete={"off"}
          value={description}
          onChange={handleInputChanges}
        />

        <button
          type={"submit"}
          className={"btn btn-outline-primary mt-1 btn-block"}
        >
          Add
        </button>
      </form>
    </>
  )
}

export default TodoAdd
