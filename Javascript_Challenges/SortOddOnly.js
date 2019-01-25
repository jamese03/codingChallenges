/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, 
you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
    for(var i =0; i < array.length -1; i++){
      var current = array[i];
      // we only want to sort the odd numbers, so we only go through sort algorithm if current is odd
        if(current%2 === 1){
          for(var j = i+1; j < array.length; j++){
            if(current > array[j] && array[j]%2 === 1){
              var temp = current;
              current = array[j];
              array[i] = current; 
              array[j] = temp;
            }
          }
        }
    }
    return array;
  }