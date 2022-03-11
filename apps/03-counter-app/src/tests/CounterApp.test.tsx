import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe("Testing <CounterApp/>", () => {
  test("it should show CounterApp", () => {
    const wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should show CounterApp and 100 by default", () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)
    const defaultValue = wrapper.find("h2").text()

    expect(`${value}`).toBe(defaultValue)
  })
})
