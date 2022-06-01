import { describe, expect, test } from "vitest"
import { getActiveUser, getUser } from "../../bases/05-functions"

describe("Testing functions", () => {
  test("it should return an object from getUser", () => {
    const user = {
      id: "uuid",
      username: "crazyuser",
    }

    const sameUser = getUser()

    expect(user).toEqual(sameUser)
  })

  test("it should return an object from getActiveUser", () => {
    const username = "crazyuser"
    const user = {
      id: "uuid",
      username,
    }

    const sameUser = getActiveUser(username)

    expect(user).toEqual(sameUser)
  })
})
