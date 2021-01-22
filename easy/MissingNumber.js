const missingNumber = nums => {
    const sortedNumbersArray = nums.sort((a, b) => {
        return a - b;
    });
    console.log(sortedNumbersArray);

    for (let i = 0; i <= sortedNumbersArray.length; i++) {
        if (sortedNumbersArray[i] !== i) {
            return i;
        }
    }
}

console.log(missingNumber([]));