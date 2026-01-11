// TODO: Write a function to reverse the numbers of an integer

function reverseInteger(num) {
  let copyNum = num;
  num = Math.abs(num);
  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit) return 0;
  return copyNum < 0 ? -reverse : reverse;
}
let num = -123;
const result = reverseInteger(num);
console.log(result);
