import { shallow } from "enzyme"

import { describe, expect, test } from "vitest"
import FirstApp from "../FirstApp"

describe("Testing FirstApp", () => {
  test("it should show FirstApp", () => {
    const greeting = "Hi there!"
    const wrapper = shallow(<FirstApp greeting={greeting} />)

    expect(wrapper).toMatchSnapshot()
  })
})
// how remove react from header
