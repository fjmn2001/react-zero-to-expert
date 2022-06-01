import { describe, expect, test } from "vitest"
import { getArray } from "../../bases/07-desestructuring-array"

describe("Testing destructure", () => {
  test("it should", () => {
    const arr = getArray()
    expect(arr).toEqual(["ABD", 123])
  })

  test("it should v2", () => {
    const [letters, numbers] = getArray()

    expect(letters).toBe("ABD")
    expect(typeof letters).toBe("string")

    expect(numbers).toBe(123)
    expect(typeof numbers).toBe("number")
  })
})
