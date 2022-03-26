import { describe, expect, test } from "vitest"
import { getGifs } from "../../category/getGif"

describe("Testing getGif", () => {
  test("it should get ten elements", async () => {
    const category = "One Punch"
    const gifs = await getGifs(category)

    expect(gifs.length).toBe(10)
  })

  test("it should get zero elements with empty category", async () => {
    const category = ""
    const gifs = await getGifs(category)

    expect(gifs.length).toBe(0)
  })
})
