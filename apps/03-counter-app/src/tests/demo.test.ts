import { describe, expect, test } from "vitest"

describe("Demo test", () => {
  test("Must be equals the strings", () => {
    const message = "Hi there!"

    const otherMessage = "Hi there!"

    expect(message).toBe(otherMessage)
  })
})
