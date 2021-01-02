const searchRange = (nums, target) => {
    const targetRange = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            targetRange[0] = i;
            break;
        }
    }

    if (targetRange[0] == -1) {
        return targetRange;
    }

    for (let j = nums.length-1; j >= 0; j--) {
        if (nums[j] == target) {
            targetRange[1] = j;
            break;
        }
    }

    return targetRange;
}

const result = searchRange([1], 1);
console.log(result);