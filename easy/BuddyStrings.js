const buddyStrings = (A, B) => {
    if (A.length !== B.length) {
        return false;
    }
    if (A.length === 1 && B.length === 1 && A === B) {
        return false;
    }

    if (A === B) {
        const frequencyCounterA = {};
        for (let i = 0; i < A.length; i++) {
            frequencyCounterA[A[i]] = (frequencyCounterA[A[i]] || 0) + 1;
            if (frequencyCounterA[A[i]] > 1) {
                return true;
            }
        } return false;
    }

    if (A !== B) {
        const diffA = {};
        const diffB = {};

        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) {
                diffA[A[i]] = (diffA[A[i]] || 0) + 1;
                diffB[B[i]] = (diffB[B[i]] || 0) + 1;
            }
        }
        let swapCount = 0;
        for (let key in diffA) {
            if (diffB[key]) {
                diffB[key]--;
                swapCount++;
            }
            if (swapCount > 2) {
                return false;
            }
        }
        
        for (let key in diffB) {
            if (diffB[key] !== 0) {
                return false;
            }
        } return true;
    }
}

const result = buddyStrings('aa', 'aa');
console.log(result);