import { types } from "../types/types"

interface State {
  name: string | null
  logged: boolean
}

type Types = keyof typeof types

type Action = {
  type: typeof types[Types]
  payload: string
}

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.login:
      return { ...state, logged: true, name: action.payload }
    case types.logout:
      return { ...state, logged: false, name: null }
    default:
      return state
  }
}

export default authReducer
