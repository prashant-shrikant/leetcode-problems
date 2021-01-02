const searchInsert = (nums, target) => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target) {
            i++;
        } else {
            return i;
        } 
    } return i;
};

const result = searchInsert([1], 0);
console.log(result);