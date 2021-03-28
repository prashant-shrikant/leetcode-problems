const isPalindrome = (s, start, end) => {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++; 
        end--;
    }
    return true;
}

const countSubstrings  = s => {
    let count = 0;

    for (let start = 0; start < s.length; start++) {
        for (let end = start; end < s.length; end++) {
            count += isPalindrome(s, start, end) ? 1 : 0;
        }
    }
    return count;
}

const result = countSubstrings("aaa");
console.log(result);