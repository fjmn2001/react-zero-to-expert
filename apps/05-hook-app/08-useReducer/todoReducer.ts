import { Todo } from "./types"

type TodoReducerAction = {
  type: "add"
  payload: Todo
}

const todoReducer = (state: Todo[], action: TodoReducerAction): Todo[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
  }
  return state
}

export default todoReducer
