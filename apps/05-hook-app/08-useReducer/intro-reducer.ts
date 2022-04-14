interface Todo {
  id: string
  todo: string
  done: boolean
}

type TodoReducerAction = {
  type: "add"
  payload: Todo
}

const initialState: Todo[] = [
  {
    id: "uuid-01",
    todo: "Buy groceries",
    done: false
  }
]

const todoReducer = (state: Todo[], action: TodoReducerAction): Todo[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
  }
  return state
}

let todos = todoReducer(initialState, "")

const newTodo: Todo = {
  id: "uuid-02",
  todo: "Practice English",
  done: false
}

const action: TodoReducerAction = {
  type: "add",
  payload: newTodo
}

todos = todoReducer(todos, action)

console.log(todos)


