const myPow = (x, n) => {
    const isExponentNegative = isNegative(n);
    let result = 1;
    n = Math.abs(n);
    while (n !== 0) {
        result *= x;
        n--;
    }
    if ( isExponentNegative ) {
        result = 1 / result;
    } 
    return result;
};

const isNegative = num => {
    if (num < 0) {
        return true;
    } 
    return false;
}

const result = myPow(2.00000, -2);
console.log(result);