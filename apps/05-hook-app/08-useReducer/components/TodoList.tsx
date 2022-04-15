import { Todo } from "../types"
import TodoListItem from "./TodoListItem"

interface TodoListProps {
  todos: Todo[]
  handleToggle: (id: string) => void
  handleDelete: (id: string) => void
}

const TodoList = ({ todos, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <ul className={"list-group list-group-flush"}>
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          i={i}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
