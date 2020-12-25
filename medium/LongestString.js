const lengthOfLongestSubstring = str => {
    let answer = 0;
    const map = new Map(); 
    let i = 0;
    for (let j = 0; j < str.length; j++) {  
        if (map.has(str[j])) {
            const indexOfJFirstLocation = map.get(str[j]);
            i = indexOfJFirstLocation > i ? indexOfJFirstLocation : i;
        }
        const difference = j - i + 1;
        answer = difference > answer ? difference: answer;
        map.set(str[j], j + 1);
    }
    return answer;
}

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);