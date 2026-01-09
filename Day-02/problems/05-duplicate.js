function duplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
    //   console.log("duplicate");
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arr = [1, 2, 3, 2, 4, 1, 5, 1];

const result = duplicate(arr);
console.log(result);
