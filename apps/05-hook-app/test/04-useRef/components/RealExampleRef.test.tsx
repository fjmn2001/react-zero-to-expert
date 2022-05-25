import { describe, expect, test } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import RealExampleRef from "../../../04-useRef/components/RealExampleRef"

describe("testing RealExampleRef.tsx", () => {
  test("it should show correctly", () => {
    const { container } = render(<RealExampleRef />)
    expect(container).toMatchSnapshot()
  })

  test("it should show <MultipleCustomHooks/> component", () => {
    // @ts-ignore
    ;(async () => {
      render(<RealExampleRef />)
      fireEvent.click(screen.getByText("Toggle"))

      // Wait for page to update with query text
      const component = await screen.findByText("Breaking Bad Quotes")
      expect(component).not.toBeNull()
    })()
  })
})
