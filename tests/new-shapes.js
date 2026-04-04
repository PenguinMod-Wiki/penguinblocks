import { parse } from "../index.js"

test("custom block shapes", () => {
  const shapes = [
    "octagonal",
    "round",
    "square",
    "leaf",
    "plus",
    "ticket",
    "bumped",
    "indented",
    "scrapped",
    "arrow",
  ]

  shapes.forEach(shape => {
    const code = `block :: ${shape}`
    const doc = parse(code)
    const block = doc.scripts[0].blocks[0]
    expect(block.info.shape).toBe(shape)
    expect(doc.stringify()).toContain(`:: ${shape}`)
  })
})
