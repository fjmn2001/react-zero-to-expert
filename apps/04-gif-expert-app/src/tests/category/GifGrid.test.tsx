import { beforeEach, describe, expect, MockedFunction, test, vi } from "vitest"
import { shallow } from "enzyme"
import GifGrid from "../../category/GifGrid"
import { useFetchGif } from "../../category/useFetchGif"
import { Image } from "../../category/types"

vi.mock("../../category/useFetchGif")

describe("Testing <GifGrid/>", () => {
  const category = "One Punch"

  beforeEach(() => {
    vi.resetAllMocks()
  })

  test("it should show correctly", () => {
    ;(useFetchGif as MockedFunction<any>).mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("it should show items when images have been loaded", () => {
    const gifs: Image[] = [
      {
        id: "custom-id",
        title: "custom-title",
        url: "custom-url",
      },
    ]
    ;(useFetchGif as MockedFunction<any>).mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find("p").exists()).toBe(false)
    expect(wrapper.find("GifGridItem").length).toBe(1)
  })
})
