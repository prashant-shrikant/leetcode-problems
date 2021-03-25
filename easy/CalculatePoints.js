const calPoints = (ops) => {
    let resultArr = [];
    let finalResult = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            let score = Number(resultArr[resultArr.length - 1]) + Number(resultArr[resultArr.length - 2]);
            resultArr.push(score);
        } else if (ops[i] === 'D') {
            let score = 2 * Number(resultArr[resultArr.length - 1]);
            resultArr.push(score);
        } else if (ops[i] === 'C') {
            resultArr.pop();
        } else {
            resultArr.push(Number(ops[i]));
        }
    }
    for (let i = 0; i < resultArr.length; i++) {
        finalResult += resultArr[i];
    }
    return finalResult;
}

const result = calPoints(["1"]);
console.log(result);