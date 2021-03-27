const wordSubsets = (A, B) => {
    const result = [];
    for (let i = 0; i < A.length; i++) {
        const frequencyCounterMajorString = getFrequencyOfMajorString(A[i]);
        let isPresent = true;
        for (let j = 0; j < B.length; j++) {
            isPresent = checkifAllCharactersArePresent(frequencyCounterMajorString, B[j]);
            if (!isPresent) {
                break;
            }
        }
        if (isPresent) {
            result.push(A[i]);
        }
    }
    return result;
}

const getFrequencyOfMajorString = (majorString) => {
    const frequencyCounterMajorString = {};
    for (let character of majorString) {
        frequencyCounterMajorString[character] = ( frequencyCounterMajorString[character] | 0 ) + 1;
    }
    return frequencyCounterMajorString;
}

const checkifAllCharactersArePresent = (frequencyCounterMajorString, minorString) => {
    const frequencyCounterMinorString = {};
    for (let character of minorString) {
        frequencyCounterMinorString[character] = ( frequencyCounterMinorString[character] | 0 ) + 1;
    }
    for (let character in frequencyCounterMinorString) {
        if (!frequencyCounterMajorString[character]) {
            return false;
        } else {
            if (frequencyCounterMajorString[character] < frequencyCounterMinorString[character]) {
                return false;
            }
        }
    }
    return true;
}

const result = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["ec","oc","ceo"]);
console.log(result);

// Solution 2
var wordSubsets = function(A, B) {
    const _ = w => {
      const arr = new Array(26).fill(0);
      const each = Array.prototype.forEach.bind(w);
      each(e => {
        const idx = e.charCodeAt(0) - "a".charCodeAt(0);
        arr[idx]++;
      });
      return arr;
    };
  
    const $ = (a, b) => a.every((e, idx) => e >= b[idx]);
  
    const wordMap = new Array(26).fill(0);
    B.forEach((e, idx) => {
      _(e).forEach((c, idx) => (wordMap[idx] = Math.max(wordMap[idx], c)));
    });
  
    return A.filter(e => $(_(e), wordMap));
  };