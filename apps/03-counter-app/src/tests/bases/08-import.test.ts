import { describe, expect, test } from "vitest"
import { getHeroById, getHeroesByOwner } from "../../bases/08-import"
import { heroes } from "../../data/heroes"

describe("Testing import", () => {
  test("it should return an hero by id", async () => {
    const id = 1
    const hero = await getHeroById(id)

    const sameHero = heroes.find((hero) => hero.id === id)

    expect(hero).toEqual(sameHero)
  })

  test("it should return undefined by id when hero does not exists", async () => {
    const id = -1
    const hero = await getHeroById(id)

    expect(hero).toBe(undefined)
  })

  test("it should return only heroes from DC", async () => {
    const owner = "DC"
    const originalHeroes = getHeroesByOwner(owner)

    const sameHeroes = heroes.filter((hero) => hero.owner === owner)

    expect(originalHeroes).toEqual(sameHeroes)
  })

  test("it should count only heroes from Marvel", async () => {
    const owner = "Marvel"
    const originalHeroes = getHeroesByOwner(owner)

    expect(originalHeroes.length).toEqual(2)
  })
})
