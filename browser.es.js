import init from "./index.js"

const penguinblocks = init(window)
window.penguinblocks = window.scratchblocks = penguinblocks
const scratchblocks = penguinblocks

// add our CSS to the page
penguinblocks.appendStyles()

export { scratchblocks }
export default penguinblocks
