import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import HeroesApp from "../src/HookApp"

describe("Testing HookApp.tsx", () => {
  test("it should show correctly", () => {
    const { container } = render(<HeroesApp />)
    expect(container).toMatchSnapshot()
  })
})
