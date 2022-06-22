import { describe, expect, test } from "vitest"
import { types } from "../../../src/auth/types/types"

describe("Testing types.ts", () => {
  test("it should return those types", () => {
    expect(types).toEqual({
      login: "[auth] Login",
      logout: "[auth] Logout",
    })
  })
})
