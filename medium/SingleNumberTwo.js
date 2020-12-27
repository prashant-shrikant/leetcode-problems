const singleNumberTwo = nums => {
    const frequencyCounter = {};
    for (let val of nums) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] == 1) {
            return key;
        }
    }
    return 0;
};

const result = singleNumberTwo([]);
console.log(result);

