import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe("Testing <GifExpertApp/>", () => {
  test("it should show correctly", () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should show a list of GifGrid", () => {
    const defaultCategories = ["One Punch", "Samurai X"]
    const wrapper = shallow(
      <GifExpertApp defaultCategories={defaultCategories} />
    )
    expect(wrapper.find("GifGrid").length).toBe(2)
  })
})
