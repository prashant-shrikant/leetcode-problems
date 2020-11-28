
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