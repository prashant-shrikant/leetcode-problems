const lengthOfLastWord = str => {
    str = str.trim();
    const arr = str.split(' ');
    const lastWord = arr[arr.length - 1];
    return lastWord.length;
}

const result = lengthOfLastWord("Prashant ");
console.log(result);