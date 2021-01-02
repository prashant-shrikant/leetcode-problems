const firstBadVersion = n => {
    let first = 0;
    let last = n.length - 1;

    while (first < last) {
        const mid = (first + last) / 2;
        if (isBadVersion(mid)) {
            last = mid; 
        } else {
            first = mid + 1;
        }
    } return first;
}