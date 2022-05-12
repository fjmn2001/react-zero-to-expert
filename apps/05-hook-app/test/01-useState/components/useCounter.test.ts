import { describe, expect, test } from "vitest"
import { useCounter } from "../../../01-useState/hooks/useCounter"
import { act, renderHook } from "@testing-library/react-hooks"

describe("Testing useCounter.ts", () => {
  test("it should return default values", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.counter).toBe(0)
    expect(typeof result.current.increment).toBe("function")
    expect(typeof result.current.decrement).toBe("function")
  })

  test("it should increment from zero to one.", () => {
    const { result } = renderHook(() => useCounter(0))
    const { increment } = result.current

    act(() => increment())

    expect(result.current.counter).toBe(1)
  })

  test("it should decrement from zero to -one", () => {
    const { result } = renderHook(() => useCounter(0))
    const { decrement } = result.current

    act(() => decrement())

    expect(result.current.counter).toBe(-1)
  })
})
