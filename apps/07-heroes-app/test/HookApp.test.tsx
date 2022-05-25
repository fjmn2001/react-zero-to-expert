import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import HookApp from "../src/HookApp"

describe("Testing HookApp.tsx", () => {
  test("it should show correctly", () => {
    const { container } = render(<HookApp />)
    expect(container).toMatchSnapshot()
  })
})
