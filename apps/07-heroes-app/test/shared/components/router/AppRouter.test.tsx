import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../../src/auth/contexts/AuthContext"
import AppRouter from "../../../../src/shared/components/router/AppRouter"

describe("Testing AppRouter.tsx", () => {
  test("it should show login view if is not logged", () => {
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
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(screen.getByText("Login View")).toBeTruthy()
  })

  test("it should show home view if is logged", () => {
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
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(screen.getByText("Marvel View")).toBeTruthy()
  })
})
