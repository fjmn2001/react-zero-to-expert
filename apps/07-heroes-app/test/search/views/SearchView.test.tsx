import { beforeEach, describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchView from "../../../src/search/views/SearchView"

const useNavigateMocked = vi.fn()

vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as object
  return {
    ...actual,
    useNavigate: () => useNavigateMocked,
  }
})

describe("Testing SearchView.tsx", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("it should show with default values", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchView />
      </MemoryRouter>
    )

    const input = screen.getByRole("textbox") as HTMLInputElement
    const img = screen.getByRole("img") as HTMLImageElement

    expect(input.value).toBe("batman")
    expect(img.src).toContain("/public/assets/img/dc-batman.jpg")
  })

  test("it should show a div if the hero not found", () => {
    const q = "invalid-hero"
    render(
      <MemoryRouter initialEntries={["/search?q=" + q]}>
        <SearchView />
      </MemoryRouter>
    )

    expect(screen.getByText(`There are not results for ${q}`)).toBeTruthy()
  })

  test("it should call the navigate to the new view", () => {
    const q = "invalid-hero"
    render(
      <MemoryRouter initialEntries={["/search?q=" + q]}>
        <SearchView />
      </MemoryRouter>
    )

    const input = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(input, {
      target: { name: "search", value: "batman" },
    })

    const form = screen.getByRole("form") as HTMLFormElement
    fireEvent.submit(form)

    expect(useNavigateMocked).toHaveBeenCalledWith("?q=batman")
  })
})
