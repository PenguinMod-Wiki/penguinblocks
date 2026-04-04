import { parse } from "../index.js"

test("basic motion blocks", () => {
  const code = "move (10) steps"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  expect(block.info.id).toBe("MOTION_MOVESTEPS")
  expect(block.children[0].value).toBe("move")
  expect(block.children[1].value).toBe("10")
  expect(doc.stringify()).toBe("move (10) steps")
})

test("basic looks blocks with strings", () => {
  const code = "say [Hello!] for (2) seconds"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  expect(block.info.id).toBe("LOOKS_SAYFORSECS")
  expect(block.children[1].value).toBe("Hello!")
  expect(doc.stringify()).toBe("say [Hello!] for (2) seconds")
})
