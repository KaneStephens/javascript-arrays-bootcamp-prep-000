
var chocolateBars = ["Snickers", "Hundred Grand", "Kitkat", "Skittles"];

function addElementToBeginningOfArray(array, element) {
  var editedArray = [element, ...array]
  return editedArray
}

function addElementToEndOfArray(array, element) {
  var editedArray = [...array, element]
  return editedArray
}

function accessElementInArray(array, index){
return array[index]
}

function removeElementFromEndOfArray(array){
  var myArray = array.slice(0, array.length - 1)
  return myArray
}

function removeElementFromBeginningOfArray(array){
  var myArray = array.slice(1)
  return myArray
}

function 

