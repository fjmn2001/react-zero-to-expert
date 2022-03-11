// normaly this code is in setupTest.js (start)
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import { expect } from "vitest"
import { createSerializer } from "enzyme-to-json"

Enzyme.configure({ adapter: new Adapter() })
// normaly this code is in setupTest.js (end)

// @ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }))
