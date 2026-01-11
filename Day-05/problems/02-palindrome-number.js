function palindrome(number) {
  if (number < 0) return false;
  let reverse = 0;
  let num = number;
  while (num > 0) {
    rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  //   if (number === reverse) {
  //     return `${number} is a palindrome number as it reads same from left to right and vice versa.`;
  //   } else {
  //     return `${number} is a not palindrome number as it reads ${reverse} from right to left.`;
  //   }

  return reverse === number;
}

let number = 121;

const result = palindrome(number);

console.log(result);
