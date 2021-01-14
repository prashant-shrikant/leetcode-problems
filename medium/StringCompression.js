const compress = (chars) => {
    let s = '';
    let oldKey = '';
    let count = -1;
    
    // Form the s string as per specifications
    for (let key of chars) {
        if (key !== oldKey) {
            count++;
            if (count > 1) {
                s = s + count;
            }
            if (count >= 1) {
                count = 0;
            }
            s = s + key;
        } else {
            count++;
        }
        oldKey = key;
    }
    count++;
    if (count > 1) {
        s += count; 
    }
    
    // Modify the existing chars array
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }
    return chars.slice(0, s.length).length;
}