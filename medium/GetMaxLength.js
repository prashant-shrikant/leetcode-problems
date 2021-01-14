const getMaxLen = nums => {
    let res = 0;
    let count = 0;
    let previous = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0){
            count = 0;
            previous = i;
        } else if(nums[i] < 0){
            count++;
        }
        if (count % 2 == 0) {
            res = Math.max(res, i-previous);
        }
    }
    
    count = 0;
    previous = nums.length;
    for (let i = nums.length-1 ; i >= 0 ; i--) {
        if (nums[i] == 0) {
            count = 0;
            previous = i;
        } else if (nums[i] < 0) {
            count++;
        }
        
        if (count % 2 == 0) {
            res = Math.max(res, Math.abs(i - previous));
        }
    }
    
    return res;
}
