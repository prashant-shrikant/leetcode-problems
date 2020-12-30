const judgeCircle = str => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        obj[char] = (obj[char] || 0) + 1;
    }
    
    if (obj['U'] === obj['D'] && obj['L'] === obj['R']) {
        return true;
    } else {
        return false;
    }
}

const result = judgeCircle("LL")
console.log(result)