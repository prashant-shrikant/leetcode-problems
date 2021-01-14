const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++;
            break;
        }
        else if (i == 0) {
            return [1, 0];
        }
        else digits[i] = 0; 
    }
    return digits;
}

console.log(plusOne([9]));