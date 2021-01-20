class BinaryMinHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        while (true) {
            let parentIndex = Math.floor((childIndex -1) / 2);
            if (this.values[childIndex] < this.values[parentIndex]) {
                [this.values[childIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[childIndex]];
                childIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        const minValue = this.values[0];
        let lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]]; 
        console.log(this.values);
        this.values.pop();
        this.percolateDown();
        return minValue;
    }

    percolateDown() {
        let parentIndex = 0;
        while (true) {
            const leftChildIndex = (parentIndex * 2) + 1;
            const rightChildIndex = (parentIndex * 2) + 2;
            const indexOfChildWithLesserValue =  this.findNodeWithLesserValueAndReturnIndex(leftChildIndex, rightChildIndex);
            if (this.values[indexOfChildWithLesserValue] < this.values[parentIndex]) {
                [this.values[indexOfChildWithLesserValue], this.values[parentIndex]] = [this.values[parentIndex], this.values[indexOfChildWithLesserValue]];
                parentIndex = indexOfChildWithLesserValue;
            } else {
                break;
            }
        }
    }

    findNodeWithLesserValueAndReturnIndex(leftChildIndex, rightChildIndex) {
        if (this.values[leftChildIndex] < this.values[rightChildIndex]) {
            return leftChildIndex;
        }
        return rightChildIndex;
    }
}

const heap = new BinaryMinHeap();
heap.insert(70);
heap.insert(15);
heap.insert(20);
heap.insert(10);
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);
console.log(heap.remove());
console.log(heap);