import { describe, expect, test } from "vitest"
import authReducer from "../../../src/auth/reducers/authReducer"
import { types } from "../../../src/auth/types/types"

describe("Testing authReducer.ts", () => {
  const initialState = {
    name: "",
    logged: false,
  }

  test("it should return default state", () => {
    const payload = "Francisco"
    const action = { type: "default", payload }
    const state = authReducer(initialState, action)
    expect(state).toBe(initialState)
  })

  test("it should return login state", () => {
    const payload = "Francisco"
    const action = { type: types.login, payload }
    const state = authReducer(initialState, action)
    expect(state).toEqual({
      name: payload,
      logged: true,
    })
  })

  test("it should return logout state", () => {
    const initialState = {
      name: "Francisco",
      logged: true,
    }

    const payload = ""
    const action = { type: types.logout, payload }
    const state = authReducer(initialState, action)
    expect(state).toEqual({
      name: null,
      logged: false,
    })
  })
})
