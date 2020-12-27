class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MinStack {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }
    pop() {
        if (!this.first) { return false; }
        this.first = this.first.next;
        this.size--;
    }
    top() {
        if (!this.first) { return false; }
        const top = this.first;
        return top.val;
    }
    getMin() {
        if (!this.first) { return false; }
        let minimumValue = this.first.val;
        let current = this.first;
        while (current) {
            if (current.val < minimumValue) {
                minimumValue = current.val;
            }
            current = current.next;
        }
        return minimumValue;
    }
}

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin()); // return -3
stack.pop();
console.log(stack.top());    // return 0
console.log(stack.getMin()); // return -2