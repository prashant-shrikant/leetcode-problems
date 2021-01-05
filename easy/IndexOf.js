const strStr = (haystack, needle) => {
    // Edge case where both haystack and needle are empty strings
    if (haystack === '' && needle === '') {
        return 0;
    }
    // Edge case where needle is empty string
    if (needle === '') {return 0}
    
    let currentIndex = 0;
    // Keep going on from index 0 to length-1
    while ( currentIndex < haystack.length) {
        // Get the currentIndex to the postition where the first characters of needle matches
        for (currentIndex; currentIndex < haystack.length; currentIndex++) {
            if (haystack[currentIndex] === needle[0]) {
                break;
            }
        }
        
        // compareStrings comparing needle and haystack character by character from that positon
        const result = compareStrings(haystack, needle, currentIndex);
        if (result[0] === true) {
            return result[1];
        } 
        currentIndex = result[1];
    } 
    return -1;
};

const compareStrings = (haystack, needle, currentIndex) => {
    for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[j+currentIndex]) {
            currentIndex++;
            return [false, currentIndex];
        }
    }
    return [true, currentIndex]; 
}
    

const result = strStr(' ', '');
console.log(result);


// Alternate solution
const strStr = (haystack, needle) => {
    for (let i = 0; ; i++) {
      for (let j = 0; ; j++) {
        if (j == needle.length()) return i;
        if (i + j == haystack.length()) return -1;
        if (needle.charAt(j) != haystack.charAt(i + j)) break;
      }
    }
  }