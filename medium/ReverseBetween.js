const reverseBetween = (head, m, n) => {
    if (!head) {
        return null;
    }
    let current = head;
    let previous = null;
    while (m > 1) {
        previous = current;
        current = current.next;
        m--;
        n--;
    }
    let connectNodePrevious = previous;
    let connectNodeCurrent = current;
    let temp = null;
    while (n > 0) {
        temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
        n--;
    }
    if (connectNodePrevious) {
        connectNodePrevious.next = previous;
    } else {
        head = previous;
    }
    connectNodeCurrent.next = current;
    return head;
}