
// Write a program to count the the total occurance of each character in a string


const countCharacters = (str) => {
  let obj = {};
  for (let i =0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if ( obj[char] > 0) {
        obj[char]++
      } else {
        obj[char] = 1;
      };
    }
  } return obj;
}

const result = countCharacters("Prashant Shrikant");
console.log(result);

// Improved without regular expressions
const countCharactersImproved = str => { 
  let obj = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  } return obj;
}

const isAlphanumeric = char => {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58 ) && // numeric 0-9
      !(code > 64 && code < 91 ) && // upper alphabets A-Z
      !(code > 96 && code < 123 )) { // lower alphabets a-z
    return false;
  }
  return true; 
}

const resultImproved = countCharactersImproved("Prashant Shrikant");
console.log(resultImproved);