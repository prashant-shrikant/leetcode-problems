const getIntersectionNode = (headA, headB) => {
    const mapA = new Map();
    while (headA) {
        mapA.set(headA);
        headA = headA.next;
    }
    
    if (mapA.size === 0) return null;

    while(headB) {
        if (mapA.has(headB)) {
            return headB;
        }
        headB = headB.next;
    } 
    return null;
}

const result = getIntersectionNode();
console.log(result)