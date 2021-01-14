const oddEvenList = head => {
    if (!head) return null;
    let odd = head;
    let even = head.next;
    const holdEvenHeadNode = even;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = holdEvenHeadNode;
    return head;
};