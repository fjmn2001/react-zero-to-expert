import { beforeEach, describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/contexts/AuthContext"
import Navbar from "../../../../src/shared/components/ui/Navbar"
import { MemoryRouter } from "react-router-dom"

const useNavigateMocked = vi.fn()

vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as object
  return {
    ...actual,
    useNavigate: () => useNavigateMocked,
  }
})

describe("Testing Navbar.tsx", () => {
  const initialValue = {
    authState: {
      logged: true,
      name: "Francisco",
    },
    login: (name: string) => {
      console.log(name)
    },
    logout: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("it should show the name of the user logged", () => {
    render(
      <AuthContext.Provider value={initialValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText("Francisco")).toBeTruthy()
  })

  test("it should call logout and navigate functions when user request a logout", () => {
    render(
      <AuthContext.Provider value={initialValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByRole("button")
    fireEvent.click(logoutBtn)

    expect(initialValue.logout).toHaveBeenCalled()
    expect(useNavigateMocked).toHaveBeenCalledWith("login", {
      replace: true,
    })
  })
})
