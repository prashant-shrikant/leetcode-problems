// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = strs => {
  let commonPrefix = '';
  if ( strs.length > 1) {
    const firstString = strs[0];
    const secondString = strs[1];
    commonPrefix = checkCommon(firstString, secondString);
    for (let j = 2; j < strs.length; j++ ) {
      commonPrefix = checkCommon(commonPrefix, strs[j]);
    }
  } else if ( strs.length == 1) {
    commonPrefix = strs[0];
  }
  return commonPrefix;
};

const checkCommon = (firstString, secondString) => {
  let i = 0;
  let count = 0;
  while (firstString[i] === secondString[i]) {
    console.log(count);
    count++;
    i++;
  } return firstString.substring(0, count);
}

// Simpler solution
const longestCommonPrefixSimple = strs => {
  if (strs.length == 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++)
    while (strs[i].indexOf(prefix) != 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === '') return '';
    }        
  return prefix;
}

const strs = ['flow', 'flow'];
const result = longestCommonPrefixSimple(strs)
console.log(result);