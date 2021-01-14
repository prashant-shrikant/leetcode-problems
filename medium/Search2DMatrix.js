const searchMatrix = (matrix, target) => {
    let result = false;

    let matrixRowLengthM = matrix.length;
    let matrixColumnLengthN = matrix[0].length;

    let firstElement = matrix[0][0];
    let lastElement = matrix[matrixRowLengthM - 1][matrixColumnLengthN - 1];

    console.log(firstElement, lastElement, target)

    if (target => firstElement && target <= lastElement) {
        let average = Math.floor(firstElement + lastElement) / 2;
        if (target < average) {
            result = startFromFirstRow(matrix, target, matrixRowLengthM, matrixColumnLengthN);
        } else {
            result = startFromLastRow(matrix, target, matrixRowLengthM, matrixColumnLengthN);
        }
    }

    return result;
}

const startFromFirstRow = (matrix, target, matrixRowLengthM, matrixColumnLengthN) => {
    let i = 0;
    while (i < matrixRowLengthM) {
        if (target > matrix[i][matrixColumnLengthN - 1]) {
            i++;
        } else {
            return makeColumnStartPositionDecision(matrix, target, i, matrixColumnLengthN);
        }
    }
};

const startFromLastRow = (matrix, target, matrixRowLengthM, matrixColumnLengthN) => {
    let i = matrixRowLengthM - 1;
    while (i >= 0) {
        if (target < matrix[i][0]) {
            i--;
        } else {
            return makeColumnStartPositionDecision(matrix, target, i, matrixColumnLengthN);
        }
    }
};

const makeColumnStartPositionDecision = (matrix, target, chosenRow, matrixColumnLengthN) => {
    let firstElement = matrix[chosenRow][0];
    let lastElement = matrix[chosenRow][matrixColumnLengthN - 1];
    let average = Math.floor(firstElement + lastElement) / 2;

    if (target < average) {
        return startFromFirstColumn(matrix, target, chosenRow, matrixColumnLengthN);
    } else {
        return startFromLastColumn(matrix, target, chosenRow, matrixColumnLengthN);
    }
}

const startFromFirstColumn = (matrix, target, chosenRow, matrixColumnLengthN) => {
    for (let i = 0; i < matrixColumnLengthN; i++) {
        if (matrix[chosenRow][i] === target) {
            return true;
        }
    }
    return false;
};

const startFromLastColumn = (matrix, target, chosenRow, matrixColumnLengthN) => {
    for (let i = matrixColumnLengthN - 1; i >= 0; i--) {
        if (matrix[chosenRow][i] === target) {
            return true;
        }
    }
    return false;
};


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 19));