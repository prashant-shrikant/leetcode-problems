const hammingWeight = n => {
    n = n.toString(2)
    let counter = 0
    for(let i = 0; i < n.length; i++) {
        if(n[i] == 1) {
            counter++
        }
    }
    return counter;
};

console.log(hammingWeight(00000000000000000000000000001011));