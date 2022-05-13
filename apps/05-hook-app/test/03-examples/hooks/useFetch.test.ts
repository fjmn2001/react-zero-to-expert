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
})
