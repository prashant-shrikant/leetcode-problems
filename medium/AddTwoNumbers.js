const returnToArray = head => {
    const result = [];
    current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

const numToList = num => {
    let node = undefined;
    if (num == '0') { 
        node = new ListNode(); 
    }
    while (num != 0) {
        let pop = num % 10;
        num = num / 10;
        num = parseInt(num, 10);
        if (node === undefined) {
            node = new ListNode(pop);
        } else {
            const newNode = new ListNode(pop);
            newNode.next = node;
            node = newNode;
        }
    }   
    return node;
}

const addTwoNumbers = (l1, l2) => {
    const arr1 = returnToArray(l1);
    const arr2 = returnToArray(l2);

    const num1 = Number(arr1.reverse().join(''));
    const num2 = Number(arr2.reverse().join(''));

    const resultNum = num1 + num2;
    // const reversedNum = resultNum.toString().split('').reverse().join('');

    return numToList(reversedNum);
};