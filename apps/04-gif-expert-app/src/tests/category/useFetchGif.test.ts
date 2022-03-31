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
})
