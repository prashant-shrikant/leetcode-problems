// Given a 32-bit signed integer, reverse digits of an integer.
// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Unsing inbuilt functions
const reverseF = x => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
};

// Using algorithm
var reverseA = (x) => {
  let reverseNumber = 0;
  while (x != 0) {
    let pop = x % 10;
    x = parseInt(x / 10);
    reverseNumber = reverseNumber * 10 + pop;
  }
  if (reverseNumber < -2147483648) {
    return 0;
  }
  if (reverseNumber > 2147483648) {
    return 0;
  }
  return(reverseNumber);
};

const resultF = reverseF(1534236469);
console.log(resultF)
const resultA = reverseA(123);
console.log(resultA)


const reverse = x => {
  let reverseNum = 0; 
  while (x != 0) {
    let pop = x % 10;
    x = parseInt(x / 10);
    reverseNum = reverseNum * 10 + pop;
  }
  console.log(reverseNum)
  if (reverseNum < -2147483648) {
    return 0;
  }
  if (reverseNum > 2147483648) {
    return 0;
  }
  return(reverseNum);
}

const result = reverse(1534236469)
console.log(result)