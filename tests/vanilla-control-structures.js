import { parse } from "../index.js"

test("standard if-then structure", () => {
  const code = `
if <(x) = (0)> then
  move (10) steps
end
`
  const doc = parse(code)
  const script = doc.scripts[0]
  expect(script.blocks.length).toBe(1)
  const op = script.blocks[0]
  expect(op.info.id).toBe("CONTROL_IF")
  expect(op.children.some(c => c.isScript)).toBe(true)
  expect(doc.stringify()).toContain("if <(x) = (0)> then")
  expect(doc.stringify()).toContain("end")
})

test("standard repeat and wait", () => {
  const code = `
repeat (10)
  wait (1) seconds
end
`
  const doc = parse(code)
  const op = doc.scripts[0].blocks[0]
  expect(op.info.id).toBe("CONTROL_REPEAT")
  expect(op.children.some(c => c.isScript)).toBe(true)
  expect(doc.stringify()).toContain("repeat (10)")
})

test("multiple scripts in document", () => {
  const code = `
when flag clicked
move (10) steps

when [any] key pressed
say [Hello!]
`
  const doc = parse(code)
  expect(doc.scripts.length).toBe(2)
  expect(doc.scripts[0].blocks[0].info.id).toBe("EVENT_WHENFLAGCLICKED")
  expect(doc.scripts[1].blocks[0].info.id).toBe("EVENT_WHENKEYPRESSED")
})
