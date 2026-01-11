// TODO: Write a function that returns the count of digits in a number.

function countDigits(num) {
  // If the number is 0
  if (num == 0) return 1;

  //   If the number is a negative number
  num = Math.abs(num);
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count = count + 1;
  }

  return count;
}

let num = 2500000;

const result = countDigits(num);

console.log(result);

/** Corner Cases in this question
 *
 *  1. What if the num = 0
 *  2. What if the number is a negative number
 */
