const buildArray = (arr, n) => {
    const result = [];
    let counter = 0;
    let i = 1;
    while (i <= n && arr[counter]) {
        if (i === arr[counter]) {
            result.push('Push');
            counter++; i++;
        } else {
            result.push('Push');
            result.push('Pop');
            i++;
        }
    } return result;
}

const result = buildArray([1], 4);
console.log(result);
