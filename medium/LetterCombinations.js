const letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    const obj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    
    let result = [];
    const helperRecursion = str => {
        if (str.length == 0) {
            return;
        }
        else {
            let tempArr = [];
            if (result.length === 0) {
                tempArr = obj[str[0]];
            } else {
                const alphasArray = obj[str[0]];
                const resultLength = result.length;
                for (let i = 0; i < alphasArray.length; i++) {
                    for (let j = 0; j < resultLength; j++) {
                        tempArr.push(result[j] + alphasArray[i]);
                    }
                }
            }
            result = tempArr;
            helperRecursion(str.substring(1));
        }
    } 
    helperRecursion(digits);
    return result;
};

const result = letterCombinations('23');
console.log(result);