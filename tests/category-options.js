import { parse } from "../syntax/index.js"
import { newView } from "../scratch3/index.js"
import { newView as newView2 } from "../scratch2/index.js"

describe("Custom categories options", () => {
  it("are handled correctly in Scratch 3", () => {
    const code = "my test block :: myCategory"
    const options = {
      categories: {
        myCategory: {
          color: "#ff0000",
          icon: "greenFlag",
        },
      },
    }
    const doc = parse(code, options)

    const view = newView(doc, options)
    const scriptView = view.scripts[0]
    const blockView = scriptView.blocks[0]

    expect(blockView.info.color).toBe("#ff0000")
    expect(
      blockView.children.some(
        child => child.isIcon && child.name === "greenFlag",
      ),
    ).toBe(true)
  })

  it("default to extension color if no color provided in Scratch 3", () => {
    const code = "my test block :: myCategory"
    const options = {
      categories: {
        myCategory: {},
      },
    }
    const doc = parse(code, options)

    const view = newView(doc, options)
    const scriptView = view.scripts[0]
    const blockView = scriptView.blocks[0]

    expect(blockView.info.category).toBe("extension")
  })

  it("are handled correctly in Scratch 2", () => {
    const code = "my test block :: myCategory"
    const options = {
      categories: {
        myCategory: {
          color: "#ff0000",
        },
      },
    }
    const doc = parse(code, options)

    const view = newView2(doc, options)
    const scriptView = view.scripts[0]
    const blockView = scriptView.blocks[0]

    expect(blockView.info.color).toBe("#ff0000")
  })

  it("default to extension color if no color provided in Scratch 2", () => {
    const code = "my test block :: myCategory"
    const options = {
      categories: {
        myCategory: {},
      },
    }
    const doc = parse(code, options)

    const view = newView2(doc, options)
    const scriptView = view.scripts[0]
    const blockView = scriptView.blocks[0]

    expect(blockView.info.category).toBe("extension")
  })
})
