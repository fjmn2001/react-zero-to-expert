import { describe, expect, test } from "vitest"
import { useFetchGif } from "../../category/useFetchGif"
import { renderHook } from "@testing-library/react-hooks"

describe("Testing useFetchGif", () => {
  test("it should return the initial state", () => {
    const category = "One Punch"
    const { result } = renderHook(() => useFetchGif(category))
    const { data, loading } = result.current

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test("it should return an image array and loading in false", async () => {
    const category = "One Punch"
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif(category)
    )

    await waitForNextUpdate()
    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
