import "./styles.css"
import { useEffect, useReducer } from "react"
import { Todo } from "./types"
import todoReducer from "./todoReducer"
import TodoList from "./components/TodoList"
import TodoAdd from "./components/TodoAdd"

const initialState: Todo[] = []

const init = () => {
  const todos = localStorage.getItem("todos")

  return todos ? JSON.parse(todos) : []
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id: string) => {
    dispatch({ type: "delete", payload: id })
  }

  const handleToggle = (id: string) => {
    dispatch({ type: "toggle", payload: id })
  }

  const handleAddTodo = (newTodo: Todo): void => {
    dispatch({
      type: "add",
      payload: newTodo,
    })
  }

  return (
    <>
      <h1>
        Todo App <small>({todos.length})</small>
      </h1>
      <hr />

      <div className={"row"}>
        <div className={"col-7"}>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className={"col-5"}>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  )
}

export default TodoApp
