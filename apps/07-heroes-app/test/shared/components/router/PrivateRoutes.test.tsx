import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/contexts/AuthContext"
import PrivateRoutes from "../../../../src/shared/components/router/PrivateRoutes"
import { MemoryRouter } from "react-router-dom"

describe("Testing PrivateRoutes.tsx", () => {
  test("it should show the children if is logged", () => {
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
        <MemoryRouter>
          <PrivateRoutes>
            <h1>PrivateRoute</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText("PrivateRoute")).toBeTruthy()
  })
})
