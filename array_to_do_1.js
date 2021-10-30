// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, num) {
  for (var x = arr.length - 1; x >= 0; x--) {
    arr[x + 1] = arr[x];
  }
  arr[0] = num;
}
var newArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
pushFront(newArr, 1);
console.log(newArr);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
  returnNum = arr[0];
  for (var x = 1; x < arr.length; x++) {
    arr[x - 1] = arr[x];
  }
  arr.pop();
  return returnNum;
}
var anotherArr = [1, 2, 3, 4, 5];
popFront(anotherArr);
console.log(anotherArr);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, num) {
  for (var x = arr.length - 1; x <= idx; x--) {
    arr[x + 1] = arr[x];
  }
  arr[idx] = num;
}
var insertArr = [2, 4, 6, 8, 10];
insertAt(insertArr, 0, 5);
console.log(insertArr);

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
  var returnNum = arr[idx];
  for (var x = idx + 1; x < arr.length; x++) {
    arr[x - 1] = arr[x];
  }
  arr.pop();
  return returnNum;
}
var removeArr = [3, 6, 9, 12, 18];
removeAt(removeArr, 1);
console.log(removeArr);

// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
  for (var x = 0; x < arr.length - 1; x += 2) {
    var tempArr = arr[x];
    arr[x] = arr[x + 1];
    arr[x + 1] = tempArr;
  }
}
var swapArr = [1, 3, 5, 7, 9, 11, 13];
swapPairs(swapArr);
console.log(swapArr);

var swapArr2 = [1, 3, 5, 7, 9, 11, 13, 15];
swapPairs(swapArr2);
console.log(swapArr2);

// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function removeDups() {}
