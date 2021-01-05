const groupAnagrams = arr => {
    const solution = []
    if (arr[0] === '') { return [['']]; }
    if (arr.length === 1 && arr[0].length === 1) { return [[arr[0]]]; }
    for (let i = 0; i < arr.length; i++) {
        const innerArray = [];
        innerArray.push(arr[i]);
        for(let j = i + 1; j < arr.length; j++) {
            if(isAnagram(arr[i], arr[j])) {
                innerArray.push(arr[j]);
                console.log(`removing ${j} ${arr[j]}`)
                arr.splice(j, 1);
            }
        }
        solution.push(innerArray);
    } 
    return solution;
}

const isAnagram = (str1, str2) => {
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // check if length is same. If not return false;
    if (str1.length != str2.length) {
        return false;
    }
    // create frequencyCounter for str1
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    // create frequencyCounter for str2
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1) {
        // if char in str1 not found in str2, return false
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // if char in str1 count is not the same return false
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result);