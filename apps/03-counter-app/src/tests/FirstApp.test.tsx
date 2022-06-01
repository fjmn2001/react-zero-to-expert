import { shallow } from "enzyme"

import { describe, expect, test } from "vitest"
import FirstApp from "../FirstApp"

describe("Testing FirstApp", () => {
  test("it should show FirstApp", () => {
    const greeting = "Hi there!"
    const wrapper = shallow(<FirstApp greeting={greeting} />)

    expect(wrapper).toMatchSnapshot()
  })

  test("it should show the subtitle from props", () => {
    const greeting = "Hi there!"
    const subtitle = "I am other subtitle"
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    )
    const paragraph = wrapper.find("p").text()
    expect(paragraph).toBe(subtitle)
  })
})
