

var chocolateBars = ["Snickers", "Hundred Grand", "Kitkat", "Skittles"];

function addElementToBeginningOfArray(Array, Element) {
  var editedArray = [Element, ...Array]
  return editedArray
}

function addElementToEndOfArray(Array, Element) {
  var editedArray = [...Array, Element]
  return editedArray
}





function destructivelyAddElementToBeginningOfArray(array, element){
  array.shift()
  var editedArray = [element, ...array]
  return editedarray
}









function accessElementInArray(array, index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return 
}




