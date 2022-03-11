import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
  },
  plugins: [react()],
})
