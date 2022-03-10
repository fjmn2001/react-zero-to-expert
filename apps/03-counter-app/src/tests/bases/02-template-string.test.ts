import { describe, expect, test } from "vitest"
import { greeting } from "../../bases/02-template-string"

describe("Template string test", () => {
  test("greeting must return Hi Francisco!", () => {
    const name = "Francisco"

    expect(greeting(name)).toBe(`Hi ${name}!`)
  })

  test("greeting must return Hi Guest! if there are no arguments", () => {
    expect(greeting()).toBe(`Hi Guest!`)
  })
})
