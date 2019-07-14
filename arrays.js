
var chocolateBars = ["Snickers", "Hundred Grand", "Kitkat", "Skittles"];

function addElementToBeginningOfArray(Array, Element) {
  var editedArray = [Element, ...Array]
  return editedArray
}

function addElementToEndOfArray(Array, Element) {
  var editedArray = [...Array, Element]
  return editedArray
}
