const wordPattern = (pattern, str) => {
    const map_pattern = new Map();
    const map_word = new Map();
    const arrString = str.split(' ');
    if (arrString.length !== pattern.length) {return false}
    for (let i = 0; i < pattern.length; i++) {
        if (!map_pattern.has(pattern[i])) {
            if (map_pattern.get(pattern[i]) !== arrString[i]) {
                return false;
            } else {
                map_pattern.set(pattern[i], arrString[i]); 
                map_word.set(arrString[i], pattern[i]);
            }
        } else {
            if (map_pattern.get())
        }
    } return  true;
}

const result = wordPattern('abba', 'dog cat cat dog');
console.log(result);