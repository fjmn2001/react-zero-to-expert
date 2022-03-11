import { describe, expect, test } from "vitest"
import { getImage } from "../../bases/11-async-await"

describe("Testing async await with fetch", () => {
  test("it should return an URL", async () => {
    const imageUrl = await getImage()

    expect(typeof imageUrl).toBe("string")
    expect((imageUrl as string).length).greaterThan(0)
  })
})
