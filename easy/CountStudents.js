const countStudents = (students, sandwiches) => {
    let ones = 0; // Students who prefer square sandwiches
    let zeros = 0; // Students who prefer circle sandwiches
    
    for (let studentType of students) {
        if (studentType == 0) zeros++;
        else ones++;
    }
    
    for (let sandwichType of sandwiches) {
        if (sandwichType == 0) {  // circle sandwich
            if(zeros == 0) { 
                return ones;
            }
            zeros--;
        }
        else{  // square sandwich
            if(ones == 0) {  
                return zeros;
            }
            ones--;
        }
    }
    return 0;
}

console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]))