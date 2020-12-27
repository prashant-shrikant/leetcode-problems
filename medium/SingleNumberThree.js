const singleNumberThree = nums => {
    const result = [];
    const frequencyCounter = {};
    for (let val of nums) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] == 1) {
            result.push(key);
        }
    }
    return result;
};

const result = singleNumberThree([]);
console.log(result);

