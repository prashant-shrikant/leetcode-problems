// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

var romanToInt = function(s) {
  const singleMap = new Map();
  singleMap.set('I', 1);
  singleMap.set('V', 5);
  singleMap.set('X', 10);
  singleMap.set('L', 50);
  singleMap.set('C', 100);
  singleMap.set('D', 500);
  singleMap.set('M', 1000);

  const doubleMap = new Map();
  doubleMap.set('IV', 4);
  doubleMap.set('IX', 9);
  doubleMap.set('XL', 40);
  doubleMap.set('XC', 90);
  doubleMap.set('CD', 400);
  doubleMap.set('CM', 900);

  let index = 0;
  let result = 0;

  while (index < s.length) {
    if ( index < s.length -1 && doubleMap.has(s.substring(index, index + 2))) {
      result += doubleMap.get(s.substring(index, index + 2));
      index += 2;
    } else if (singleMap.has(s[index])) {
      result += singleMap.get(s[index]);
      index += 1;
    } 
  }
  return result;
};

const result = romanToInt('IV');
console.log(result);