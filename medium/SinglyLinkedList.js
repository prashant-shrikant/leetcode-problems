class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    get(index) {
        if (index < 0 || index >= this.length) return -1;
        let current = this.head;
        let counter = 0;
        while (counter != index) {
            current = current.next;
            counter++
        } 
        return current.val;
    }
    getNode(index) {
        if (index < 0 || index > this.length) return -1;
        let current = this.head;
        let counter = 0;
        while (counter != index) {
            current = current.next;
            counter++
        } 
        return current;
    }
    addAtHead(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        } this.length++;
    }
    addAtTail(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let tail = this.getNode(this.length-1);
            tail.next = newNode;
        } this.length++;
    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return -1;
        else if (index == 0) this.addAtHead(val);
        else if (index == this.length) this.addAtTail(val);
        else {
            const newNode = new Node(val);
            let previousNode = this.getNode(index-1);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++
        }
    }
    deleteAtIndex(index) {
        if (index < 0 || index > this.length) return -1;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previousNode = this.getNode(index-1);
        const nextNode = this.getNode(index + 1);
        previousNode.next = nextNode;
        this.length--;
    }
}

const list = new MyLinkedList();
list.addAtIndex(0, 10);
list.addAtIndex(0, 20);
list.addAtIndex(1, 230);
console.log(list.get(0))