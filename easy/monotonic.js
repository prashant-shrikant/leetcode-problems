// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

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


