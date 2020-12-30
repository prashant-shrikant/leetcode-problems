const nthSuperUglyNumber = (n, primes) => {
    const result = [1];
    let counter = 0;
    let i = primes[0];
    while (counter < n) {
        if (isUgly(i, primes)) {
            result.push(i);
            counter++;
        }
        i++;
    }
    console.log(result);
    return result[n - 1];
}

const isUgly = (num, primes) => {
    if (num === 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    for (let i = 0; i < primes.length; i++) {
        if (num % primes[i] === 0) {
            return isUgly(num / primes[i], primes);
        }
    }
    return false;
}

const result = nthSuperUglyNumber(100000, [7, 19, 29, 37, 41, 47, 53, 59, 61, 79, 83, 89, 101, 103, 109, 127, 131, 137, 139, 157, 167, 179, 181, 199, 211, 229, 233, 239, 241, 251]);
console.log(result);

var nthSuperUglyNumber = function (n, primes) {
    primes.sort((a, b) => {
        return a - b
    })
    let ptr = []
    let ugly = []
    for (let i = 0; i < primes.length; i++)
        ptr[i] = 0
    ugly.push(1)
    for (let i = 1; i < n; i++) {
        let mn = Math.pow(2, 32) - 1
        for (let j = 0; j < primes.length; j++) {
            mn = Math.min(mn, primes[j] * ugly[ptr[j]])
        }
        ugly[i] = mn
        for (let j = 0; j < primes.length; j++) {
            if (mn % primes[j] === 0)
                ptr[j]++
        }
    }
    return ugly[n - 1]
};