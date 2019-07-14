
var chocolateBars = ["Snickers", "Hundred Grand", "Kitkat", "Skittles"];

function addElementToBeginningOfArray(Array, Element) {
  var editedArray = [Element, ...Array]
  return editedArray
}