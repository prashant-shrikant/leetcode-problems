const detectCycle = head => {
    if (!head) return null;
    const map = new Map();
    let current = head;
    while (current) {
        if (!map.has(current)) {
            map.set(current);
            current = current.next;
        } else {
            return current;
        }
    } return null;
}