const rotate = matrix => {
    const matrixLength = matrix.length;
    if (matrixLength !== 1) {
        matrix = transpose(matrix, matrixLength);
        matrix = mirror(matrix, matrixLength);
    }
}

const transpose = (matrix, matrixLength) => {
    for (let i = 0; i < matrixLength; i++) {
        for (let j = i; j < matrixLength; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]] 
        }
    }
    return matrix;
}

const mirror = (matrix, matrixLength) => {
    for (let i = 0; i < matrixLength; i++) {
        let j = 0; let k = matrixLength - 1;
        while (j < k) {
            [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]] 
            j++;
            k--;
        }
    }
    return matrix;
}

rotate([[1,2,3],[4,5,6],[7,8,9]]);

