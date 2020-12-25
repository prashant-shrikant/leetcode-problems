const myAtoi = str => {
    let i = 0;
    let sign = 1;
    let result = 0;
    if (str.length == 0) return 0;

    while (i < str.length && str.charAt(i) == ' ') {
        i++;
    }

    if (i < str.length && (str.charAt(i) == '+' || str.charAt(i) == '-'))
        sign = (str.charAt(i++) == '-') ? -1 : 1;

    while (i < str.length && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
        if (result > 2147483647 / 10 ||
            (result == 2147483647 / 10 && str.charAt(i) - '0' > 2147483647 % 10)) {
            return (sign == 1) ? 2147483647 : -2147483648;
        }
        result = result * 10 + (str.charAt(i++) - '0');
    }
    return result * sign;
}

const result = myAtoi("     -42");
console.log(result);