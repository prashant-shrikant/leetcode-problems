// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.


// two-pass solution
const isMonotonic = A => {
  return increasing(A) || decreasing(A);
};

const increasing = A => {
  for (let i =0; i < A.length; i++) {
      if (A[i] > A[i+1]) {
          return false;
      } 
  } return true;
}

const decreasing = A => {
  for (let i =0; i < A.length; i++) {
      if (A[i] < A[i+1]) {
          return false;
      } 
  } return true;
}


// One-pass solution
const isMonotonicOnePass = A => {
  let increasing = true;
  let decreasing = true;

  for (let i =0; i < A.length; i++) {
    if (A[i] > A[i+1]) {
      increasing = false;
    } else if (A[i] < A[i+1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

// two pass
// const result = isMonotonic([5, 4, 3, 2, 1])
// console.log(result);

// one pass
const result = isMonotonicOnePass([5, 4, 5, 2, 1])
console.log(result);