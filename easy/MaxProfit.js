const maxProfit = prices => {
    let minPrice = 2147483647;
    let maxGain = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxGain) {
            maxGain = prices[i] - minPrice;
        } 
    }
    return maxGain;
}

const result = maxProfit([7,1,5,3,6,4]);
console.log(result);