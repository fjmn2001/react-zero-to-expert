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

  test("it should increment with the button +1", () => {
    const wrapper = shallow(<CounterApp />)
    wrapper.find("button").at(0).simulate("click")

    const counterText = wrapper.find("h2").text().trim()

    expect(counterText).toBe("1")
  })

  test("it should decrement with the button -1", () => {
    const wrapper = shallow(<CounterApp />)
    wrapper.find("button").at(2).simulate("click")

    const counterText = wrapper.find("h2").text().trim()

    expect(counterText).toBe("-1")
  })

  test("it should reset with the button reset", () => {
    const initialValue = 10
    const wrapper = shallow(<CounterApp value={initialValue} />)
    wrapper.find("button").at(1).simulate("click")

    const counterText = wrapper.find("h2").text().trim()

    expect(counterText).toBe("10")
  })
})
