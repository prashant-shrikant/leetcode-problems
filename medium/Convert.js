const transpose = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        };
    }
    return arr
}

var convert = function (s, numRows) {
    var result = new Array(s.length);
    for (var i = 0; i < result.length; i++) {
        result[i] = new Array();
    }
    let count = 0, x = 0, y = 0;
    let goingDown = true;

    while (count < s.length) {
        result[x][y] = s[count]
        count++
        if (y === numRows - 1) {
            goingDown = false
        }
        if (y === 0) goingDown = true
        if (goingDown) {
            y++
        } else {
            x++, y--
        }
    }
    let transposed = transpose(result)
    let str = "";
    for (let i = 0; i < transposed.length; i++) {
        for (let j = 0; j < transposed[i].length; j++) {
            if (transposed[i][j]) {
                str = str + transposed[i][j]
            }
        };
    }
    return str;
}