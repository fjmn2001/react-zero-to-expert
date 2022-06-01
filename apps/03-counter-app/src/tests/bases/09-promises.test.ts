import { describe, expect, test } from "vitest"
import { getHeroByIdAsync } from "../../bases/09-promises"
import { heroes } from "../../data/heroes"

describe("Testing promises", () => {
  test("it should return an hero.", async () => {
    const id = 2
    const hero = await getHeroByIdAsync(id)
    const sameHero = heroes[1]

    expect(hero).toEqual(sameHero)
  })

  test("it should return an hero.", async () => {
    const id = -2
    try {
      await getHeroByIdAsync(id)
    } catch (e) {
      expect((e as Error).message).toBe(`Hero ${id} does not exists.`)
    }
  })
})
