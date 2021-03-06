import { describe, expect, test, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/contexts/AuthContext"
import PrivateRoutes from "../../../../src/shared/components/router/PrivateRoutes"
import { MemoryRouter } from "react-router-dom"

describe("Testing PrivateRoutes.tsx", () => {
  test("it should show the children if is logged", () => {
    Storage.prototype.setItem = vi.fn()

    const initialValue = {
      authState: {
        logged: true,
        name: "Francisco",
      },
      login: (name: string) => {
        console.log(name)
      },
      logout: () => {},
    }
    render(
      <AuthContext.Provider value={initialValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoutes>
            <h1>PrivateRoute</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText("PrivateRoute")).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
  })
})
