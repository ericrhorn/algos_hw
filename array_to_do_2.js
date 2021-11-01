// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverseArr(arr) {
  for (var x = 0; x < arr.length / 2; x++) {
    var tempArr = arr[x];
    arr[x] = arr[arr.length - 1 - x];
    arr[arr.length - 1 - x] = tempArr;
  }
}
var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArr(newArr);
console.log(newArr);

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1),
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy) {
  for (var x = 0; x < shiftBy; x++) {
    var tempArr = arr[arr.length - 1];
    for (var z = arr.length - 2; z >= 0; z--) {
      arr[z + 1] = arr[z];
    }
    arr[0] = tempArr;
  }
}
var newArray2 = [2, 4, 6, 8, 10];
rotateArr(newArray2, 1);
console.log(newArray2);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] < min || arr[x] > max) {
      for (var z = x + 1; z < arr.length; z++) {
        arr[x - 1] = arr[x];
      }
      arr.length--;
      x--;
    }
  }
}
var newArray3 = [24, 35, 45, 55, 65, 75, 85, 95];
filterRange(newArray3);
console.log(newArray3);

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
