import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import AddCategory from "../../category/AddCategory"

describe("Testing AddCategory", () => {
  test("it should show component correctly", () => {
    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should change the input text", () => {
    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    const input = wrapper.find("input")
    const value = "He there!"

    input.simulate("change", { target: { value } })

    expect(wrapper.find("input").prop("value")).toBe(value)
  })
})
