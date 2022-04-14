import "./styles.css"
import { useReducer } from "react"
import { Todo } from "./types"
import todoReducer from "./todoReducer"

const initialState: Todo[] = [
  {
    id: new Date().getTime().toString(),
    description: "Walk",
    done: false,
  },
]

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)
  console.log(todos)
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
                <p className={"text-center"}>
                  {i + 1}. {todo.description}
                </p>
                <button className={"btn btn-danger"}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={"col-5"}>
          <h4>Add Todo</h4>
          <hr />

          <form action="">
            <input
              type="text"
              name={"description"}
              className={"form-control"}
              placeholder={"learn..."}
              autoComplete={"off"}
            />

            <button className={"btn btn-outline-primary mt-1 btn-block"}>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TodoApp
