// TODO: Write a function that return the smallest number in an array.

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}

let arr = [16, -9, -19, -3, -100, 400];

const result = findSmallest(arr);
console.log(result);
