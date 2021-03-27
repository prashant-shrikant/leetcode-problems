const getImportance = (employees, id) => {
    let totalValue = 0;
    let chosenEmployee
    for (let i = 0; i < employees.length; i++) {
        employee = employees[i];
        if (id === employee[0])
        {
            chosenEmployee = employee;
        }
    }

    totalValue += chosenEmployee[1];
    let subordinates = chosenEmployee[2];
    console.log(totalValue);
    
    for (let i = 0; i < subordinates.length; i++) {
        for (let j = 0; j < employees.length; j++) {
            if (subordinates[i] === employees[j][0]) {
                totalValue += employees[j][1];
            }
        }
    }
    return totalValue;
}

const result = getImportance([[1,2,[2]], [2,3,[]]], 2);
console.log(result);