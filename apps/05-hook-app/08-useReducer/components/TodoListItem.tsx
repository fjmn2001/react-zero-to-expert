import { Todo } from "../types"

interface TodoListItemProps {
  todo: Todo
  i: number
  handleToggle: (id: string) => void
  handleDelete: (id: string) => void
}

const TodoListItem = ({
  todo,
  i,
  handleToggle,
  handleDelete,
}: TodoListItemProps) => {
  return (
    <li className={"list-group-item"}>
      <p
        className={todo.done ? "text-center completed" : "text-center"}
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
  )
}

export default TodoListItem
