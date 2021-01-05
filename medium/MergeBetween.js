const mergeInBetween = (list1, a, b, list2) => {
    let current = list1;
    let start;
    for (let i = 0; i <= b; i++) {
        if (i === a - 1) {
            start = current;
        }
        current = current.next;
    }

    start.next = list2;

    while (list2.next) {
        list2 = list2.next;
    }

    list2.next = current;
    return list1;
}