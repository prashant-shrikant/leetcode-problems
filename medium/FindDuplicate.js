const findDuplicate = nums => {
    const obj = {};
    for (let key of nums) {
        if (obj[key]) {
            return key;
        } else {
            obj[key] = 1;
        }
    }
}

const result = findDuplicate([1,1,2]);
console.log(result);