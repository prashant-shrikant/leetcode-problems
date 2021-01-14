const shuffle = (arr, n) => {
    const arrResult = [];
    for (let i = 0; i < n; i++) {
        arrResult.push(arr[i], arr[i+n]);
    }
    return arrResult;
}

const result = shuffle([2,5,1,3,4,7], 3)
console.log(result);
