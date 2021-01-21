const divide = (dividend, divisor) => {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    let result = 0;
    let isDividendNegativeFlag = isNegative(dividend);
    let isDivisorNegativeFlag = isNegative(divisor);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        result++;
        dividend = dividend - divisor;
    }

    return manipulateResult(result, isDividendNegativeFlag, isDivisorNegativeFlag)
}

const isNegative = num => {
    if (num < 0) {
        return true;
    }
    return false;
} 

const manipulateResult = (result, dividendFlag, divisorFlag) => {
    if (dividendFlag && divisorFlag) {
        result = result * 1;
    } else if (dividendFlag) {
        result = result * -1;
    } else if (divisorFlag) {
        result = result * -1;
    }
    return result;
}

console.log(divide(2147483647, 1));

// Alternate method. https://leetcode.com/problems/divide-two-integers/discuss/778597/Javascript-with-explanation-or-80ms-or-21-lines 

var divide = function(dividend, divisor) {
    const retIsNegative = divisor > 0 ^ dividend > 0
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    let ret = 0
    while (divisor <= dividend) {
        let value = divisor
        let multiple = 1
        while (value + value <= dividend) {
            value += value
            multiple += multiple
        }
        dividend = dividend - value
        ret += multiple
    }
    
    if (ret > ((2**31) - 1)) {
        return retIsNegative ? -(2**31) : 2**31 - 1
    }
    return retIsNegative ? -ret : ret
};