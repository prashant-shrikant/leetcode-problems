// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (x) => {
  let originalNumber = x;
  let reverseNumber = 0;
  while (x != 0) {
    let pop = x % 10;
    x = x / 10;
    x = parseInt(x, 10);
    reverseNumber = reverseNumber * 10 + pop;
  }

  if (originalNumber == reverseNumber && reverseNumber >= 0) {
    return true;
  } return false;
};

const result = isPalindrome(545);
console.log(result);