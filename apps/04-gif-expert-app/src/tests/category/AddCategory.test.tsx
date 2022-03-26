import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import AddCategory from "../../category/AddCategory"

describe("Testing AddCategory", () => {
  test("it should show component correctly", () => {
    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)
    expect(wrapper).toMatchSnapshot()
  })
})
