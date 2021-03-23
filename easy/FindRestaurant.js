const findRestaurant = (list1, list2) => {
    const listOneObj = {};
    const sumObj = {};
    for (let i = 0; i < list1.length; i++) {
        const listObj = list1[i];
        listOneObj[listObj] = i;
    }

    for (let i = 0; i < list2.length; i++) {
        const listTwoObj = list2[i];
        if (listOneObj[listTwoObj] >= 0) {
            sumObj[listTwoObj] = listOneObj[listTwoObj] + i;
        }
    }
    let lowest = Infinity;
    for (let item in sumObj) {
        if (sumObj[item] < lowest) {
            lowest = sumObj[item];
        }
    }
    return getKeyByValue(sumObj, lowest);
    
}

const getKeyByValue = (object, value) => {
    const arr = []
    for (let item in object) {
        if (object[item] === value) {
            arr.push(item);
        }
    }
    return arr;
}

const result = findRestaurant(["KFC", "Shogun"], ["Shogun"]);
console.log(result);