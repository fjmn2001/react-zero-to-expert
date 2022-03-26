import { describe, expect, test } from "vitest"
import { shallow } from "enzyme"
import GifGridItem from "../../category/GifGridItem"
import { Image } from "../../category/types"

describe("Testing GifGridItem", () => {
  const title = "custom-title"
  const url = "custom-url"
  const image: Image = {
    id: "custom-id",
    title: title,
    url: url,
  }

  test("it should show correctly", () => {
    const wrapper = shallow(<GifGridItem image={image} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should have a paragraph with the title", () => {
    const wrapper = shallow(<GifGridItem image={image} />)
    const paragraph = wrapper.find("p")
    expect(paragraph.text()).toBe(title)
  })

  test("it should have a image with Image properties", () => {
    const wrapper = shallow(<GifGridItem image={image} />)
    const img = wrapper.find("img")
    expect(img.prop("src")).toBe(url)
    expect(img.prop("alt")).toBe(title)
  })

  test("it should have animate__fadeIn class", () => {
    const wrapper = shallow(<GifGridItem image={image} />)
    const div = wrapper.find("div")
    expect(div.hasClass("animate__fadeIn")).toBe(true)
  })
})
