import { describe, expect, MockedFunction, test, vi, beforeEach } from "vitest"
import { render } from "@testing-library/react"
import MultipleCustomHooks from "../../../03-examples/components/MultipleCustomHooks"
import useFetch from "../../../03-examples/hooks/useFetch"

vi.mock("../../../03-examples/hooks/useFetch")

describe("Testing MultipleCustomHooks.tsx", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  test("it should show correctly", () => {
    ;(useFetch as MockedFunction<any>).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })
    const { container } = render(<MultipleCustomHooks />)
    expect(container).toMatchSnapshot()
  })

  test("it should show information", () => {
    ;(useFetch as MockedFunction<any>).mockReturnValue({
      data: [{ author: "Francisco", quote: "typescript" }],
      loading: false,
      error: null,
    })
    const { container } = render(<MultipleCustomHooks />)
    expect(container).toMatchSnapshot()
    expect(container.getElementsByClassName("blockquote").length).toBe(1)
  })
})
