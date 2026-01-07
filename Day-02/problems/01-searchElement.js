// TODO: Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

let arr = [4, 2, 8, 10, 8, 30];

// const result = searchElement(arr, 2);
const result = searchElement(arr, 30);
console.log(result);
