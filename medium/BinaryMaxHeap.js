class BinaryMaxHeap {
    constructor() {
        // this.values = [];
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        while (parentIndex >= 0 && childIndex >= 0 && this.values[parentIndex] < this.values[childIndex]) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    remove() {
        const oldMax = this.values[0];
        const lastValueIndex = this.values.length - 1;
        //swap first and last element in values
        [this.values[0], this.values[lastValueIndex]] = [this.values[lastValueIndex], this.values[0]];
        this.values.pop();
        this.percolateDown();
        return oldMax;
    }

    percolateDown() {
        let parentIndex = 0;
        while (true) {
            let leftChildIndex = (2 * parentIndex) + 1;
            let rightChildIndex = (2 * parentIndex) + 2;
            let largerValueChildIndex = this.findLargerValueAndReturnItsIndex(leftChildIndex, rightChildIndex); 
            if (this.values[largerValueChildIndex] > this.values[parentIndex]) {
                [this.values[parentIndex], this.values[largerValueChildIndex]] = [this.values[largerValueChildIndex], this.values[parentIndex]];
                parentIndex = largerValueChildIndex;
            } else {
                break;
            }
        }

    }

    findLargerValueAndReturnItsIndex(leftChildIndex, rightChildIndex) {
        if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
            return leftChildIndex;
        } 
        return rightChildIndex;
    }
}

const heap = new BinaryMaxHeap();
heap.insert(75);
console.log(heap);
console.log(heap.remove()); 
console.log(heap);

