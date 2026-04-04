import { parse } from "../index.js"

test("reporter with branch (mouth)", () => {
  const code = "(reporter {\n  move (10) steps\n})"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  expect(block.isReporter).toBe(true)
  expect(block.children.some(c => c.isScript)).toBe(true)
  expect(doc.stringify()).toContain("(reporter\n  move (10) steps)")
})

test("boolean with branch (mouth)", () => {
  const code = "<predicate {\n  move (10) steps\n}>"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  expect(block.isBoolean).toBe(true)
  expect(block.children.some(c => c.isScript)).toBe(true)
  expect(doc.stringify()).toContain("<predicate\n  move (10) steps>")
})
