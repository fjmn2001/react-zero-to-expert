import { Todo } from "./types"

export type TodoReducerAction =
  | {
      type: "add"
      payload: Todo
    }
  | {
      type: "delete" | "toggle"
      payload: string
    }

const todoReducer = (state: Todo[], action: TodoReducerAction): Todo[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "delete":
      return state.filter((value) => value.id !== action.payload)
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
  }
  return state
}

export default todoReducer
