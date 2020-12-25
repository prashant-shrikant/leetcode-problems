const threeSum = nums => {
    for (let i = 0; i < nums.length; i++) {
        let negateElement = -1 * nums[i];
        if (i > 0 && (nums[i] === nums[i-1])) continue;
        console.log(i)
        for (let j = i + 1; j < nums.length; j++) {
            if (j !== i) {
                const difference = negateElement - nums[j];
                for (let k = j + 1; k < nums.length; k++) {
                    if (k !== i && k !== j) {
                        if (nums[k] === difference) {
                            console.log(i, j, k, [nums[i], nums[j], nums[k]], [nums[i] + nums[j] +  nums[k]] );
                        }
                    }
                }
            }
        }
    }
}

const result = threeSum([-2, -2, 1, 1 ]);
console.log(result);