
var chocolateBars = ["Snickers", "Hundred Grand", "Kitkat", "Skittles"];

function addElementToBeginningOfArray(Array, Element) {
  var editedArray = [Element, ...Array]
  return editedArray
}

function addElementToEndOfArray(Array, Element) {
  var editedArray = [...Array, Element]
  return editedArray
}

function accessElementInArray(array, index){
return array[index]
}

function removeElementFromEndOfArray(array){
  var myArray = array.slice(0, array.length - 1)
  return myArray
}

