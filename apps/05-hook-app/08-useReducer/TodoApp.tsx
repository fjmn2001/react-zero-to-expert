import "./styles.css"
import { FormEvent, useEffect, useReducer } from "react"
import { Todo } from "./types"
import todoReducer, { TodoReducerAction } from "./todoReducer"
import useForm from "../02-useEffect/hooks/useForm"

interface FormValues {
  description: string
}

const initialState: Todo[] = []

const init = () => {
  const todos = localStorage.getItem("todos")

  return todos ? JSON.parse(todos) : []
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)
  const [formValues, handleInputChanges, resetFormValue] = useForm<FormValues>({
    description: "",
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id: string) => {
    dispatch({ type: "delete", payload: id })
  }

  const handleToggle = (id: string) => {
    dispatch({ type: "toggle", payload: id })
  }

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault()

    if (formValues.description.trim().length === 0) {
      return
    }

    const newTodo: Todo = {
      id: new Date().getTime().toString(),
      description: formValues.description,
      done: false,
    }
    const action: TodoReducerAction = {
      type: "add",
      payload: newTodo,
    }
    dispatch(action)
    resetFormValue()
  }

  return (
    <>
      <h1>
        Todo App <small>({todos.length})</small>
      </h1>
      <hr />

      <div className={"row"}>
        <div className={"col-7"}>
          <ul className={"list-group list-group-flush"}>
            {todos.map((todo, i) => (
              <li key={todo.id} className={"list-group-item"}>
                <p
                  className={
                    todo.done ? "text-center completed" : "text-center"
                  }
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.description}
                </p>
                <button
                  className={"btn btn-danger"}
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={"col-5"}>
          <h4>Add Todo</h4>
          <hr />

          <form action="" onSubmit={handleAddTodo}>
            <input
              type="text"
              name={"description"}
              className={"form-control"}
              placeholder={"learn..."}
              autoComplete={"off"}
              value={formValues.description}
              onChange={handleInputChanges}
            />

            <button
              type={"submit"}
              className={"btn btn-outline-primary mt-1 btn-block"}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TodoApp
