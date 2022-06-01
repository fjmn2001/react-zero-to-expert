import { describe, expect, fn, test } from "vitest"
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

  test("it should do nothing when the input is empty", () => {
    const setCategories = fn()
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    const form = wrapper.find("form")

    form.simulate("submit", {
      preventDefault: () => {},
    })

    expect(setCategories).toHaveBeenCalledTimes(0)
  })

  test("it should call setCategories and clean the input text", () => {
    const setCategories = fn()
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    const value = "He there!"
    wrapper.find("input").simulate("change", { target: { value } })

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    })

    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(wrapper.find("input").prop("value")).toBe("")
  })
})
