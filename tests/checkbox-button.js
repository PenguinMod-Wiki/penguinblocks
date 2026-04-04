import { parse } from "../index.js"

test("checkbox functionality", () => {
  const trueCode = "<true :: shadow>"
  const trueDoc = parse(trueCode)
  const trueBlock = trueDoc.scripts[0].blocks[0]
  const trueCheckbox = trueBlock.children[0]
  expect(trueCheckbox.isCheckbox).toBe(true)
  expect(trueCheckbox.value).toBe(true)

  const falseCode = "<false :: shadow>"
  const falseDoc = parse(falseCode)
  const falseBlock = falseDoc.scripts[0].blocks[0]
  const falseCheckbox = falseBlock.children[0]
  expect(falseCheckbox.isCheckbox).toBe(true)
  expect(falseCheckbox.value).toBe(false)
})

test("button with unicode naming", () => {
  const plusCode = "@plus"
  const plusDoc = parse(plusCode)
  const plusBlock = plusDoc.scripts[0].blocks[0]
  const plusButton = plusBlock.children[0]
  expect(plusButton.isButton).toBe(true)
  expect(plusButton.name).toBe("+")

  const minusCode = "@minus"
  const minusDoc = parse(minusCode)
  const minusBlock = minusDoc.scripts[0].blocks[0]
  const minusButton = minusBlock.children[0]
  expect(minusButton.isButton).toBe(true)
  expect(minusButton.name).toBe("-")
})

test("button in string input", () => {
  const code = "[+]"
  const doc = parse(code)
  const block = doc.scripts[0].blocks[0]
  const button = block.children[0]
  expect(button.isButton).toBe(true)
  expect(button.name).toBe("+")
})
