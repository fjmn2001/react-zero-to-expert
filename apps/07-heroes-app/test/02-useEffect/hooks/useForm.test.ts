import { describe, expect, test } from "vitest"
import { act, renderHook } from "@testing-library/react-hooks"
import useForm from "../../../02-useEffect/hooks/useForm"
import { ChangeEvent } from "react"

describe("Testing useForm.ts", () => {
  const initialForm = {
    name: "Francisco",
    email: "email@gmail.com",
  }

  test("it should return default value", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [value, handleInputChange, reset] = result.current

    expect(value).toBe(initialForm)
    expect(typeof handleInputChange).toBe("function")
    expect(typeof reset).toBe("function")
  })

  test("it should update the name to Francis", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current
    const newName = "Francis"

    act(() => {
      const value = {
        target: { name: "name", value: newName },
      } as ChangeEvent<HTMLInputElement>
      handleInputChange(value)
    })

    expect(result.current[0]).toEqual({
      name: newName,
      email: "email@gmail.com",
    })
  })

  test("it should reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current
    const newName = "Francis"

    act(() => {
      const value = {
        target: { name: "name", value: newName },
      } as ChangeEvent<HTMLInputElement>
      handleInputChange(value)
      reset()
    })

    expect(result.current[0]).toEqual(initialForm)
  })
})
