import { parse } from "../index.js"

test("blocks with comments", () => {
  const code = "move (10) steps // this is a comment"
  const doc = parse(code)
  const script = doc.scripts[0]
  const block = script.blocks[0]
  expect(block.comment).not.toBeNull()
  expect(block.comment.label.value.trim()).toBe("this is a comment")
  expect(doc.stringify()).toBe("move (10) steps // this is a comment")
})

test("diff glows syntax", () => {
  const code = "+ move (10) steps"
  const doc = parse(code)
  const script = doc.scripts[0]
  const glow = script.blocks[0]
  expect(glow.isGlow).toBe(true)
  expect(glow.child.blocks[0].info.id).toBe("MOTION_MOVESTEPS")
  expect(doc.stringify()).toBe("+ move (10) steps")
})

test("standard icon stringification", () => {
  const code = "when @greenFlag clicked"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  const icon = block.children.find(c => c.isIcon)
  expect(icon.isIcon).toBe(true)
  expect(icon.name).toBe("greenFlag")
  expect(doc.stringify()).toBe("when ⚑ clicked")
})
