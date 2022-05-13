import { describe, expect, test } from "vitest"
import { renderHook } from "@testing-library/react-hooks"
import useFetch from "../../../03-examples/hooks/useFetch"

describe("Testing useFetch", () => {
  test("it should return default values", () => {
    const { result } = renderHook(() =>
      useFetch(`https://breakingbadapi.com/api/quotes/1`)
    )
    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  // @ts-ignore
  test("it should return correct values", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://breakingbadapi.com/api/quotes/1`)
    )

    await waitForNextUpdate({ timeout: 2000 })

    const { data, loading, error } = result.current

    expect(data).toEqual([
      {
        quote_id: 1,
        quote: "I am not in danger, Skyler. I am the danger!",
        author: "Walter White",
        series: "Breaking Bad",
      },
    ])
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  // @ts-ignore
  test("it should handle the error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/invaid/users?page=2`)
    )

    await waitForNextUpdate({ timeout: 2000 })

    const { data, loading, error } = result.current

    expect(data).toEqual(null)
    expect(loading).toBe(false)
    expect(error).not.toBe(null)
  })
})
