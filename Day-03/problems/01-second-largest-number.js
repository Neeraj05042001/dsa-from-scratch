// TODO: Find Second Largest number in an array.

let arr = [4, 9, 0, 2, 8, 7, 1, 12, 12];
// let arr = [];

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast two elements";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const result = secondLargest(arr);

console.log(result);
