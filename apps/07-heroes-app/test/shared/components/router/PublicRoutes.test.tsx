import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/contexts/AuthContext"
import PublicRoutes from "../../../../src/shared/components/router/PublicRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("Testing PublicRoutes.tsx", () => {
  test("it should show the children if not is logged", () => {
    const initialValue = {
      authState: {
        logged: false,
        name: "",
      },
      login: (name: string) => {
        console.log(name)
      },
      logout: () => {},
    }
    render(
      <AuthContext.Provider value={initialValue}>
        <PublicRoutes>
          <h1>PublicRoute</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    )

    expect(screen.getByText("PublicRoute")).toBeTruthy()
  })

  test("it should return the navigate if is logged", () => {
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
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path={"login"}
              element={
                <PublicRoutes>
                  <h1>PublicRoute</h1>
                </PublicRoutes>
              }
            />
            <Route path={"/"} element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText("Marvel Page")).toBeTruthy()
  })
})
