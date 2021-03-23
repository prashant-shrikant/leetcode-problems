// const maxCount = (m, n, ops) => {
//     if (ops.length === 0) { return m * n; }
//     const arr = [];
//     for (let i = 0; i < m; i++) {
//         arr [i] = [];
//         for (let j =0; j < n; j++) {
//             arr[i][j] = 0;
//         }
//     }

//     for (let operation of ops) {
//         for (let i = 0; i < operation[0]; i++) {
//             for (let j =0; j < operation[1]; j++) {
//                 arr[i][j]++;
//             }
//         }
//     }

//     let count = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j =0; j < n; j++) {
//             if( arr[i][j] === arr[0][0] ) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

const result =  maxCount(3, 3, [[2, 2], [3, 3]]);
console.log(result);


const maxCount = (m, n, ops) => {
    let minX = m
    let minY = n
    
    for (let op of ops) {
        minX = Math.min(op[0], minX)
        minY = Math.min(op[1], minY)
    }

    return minX * minY
}