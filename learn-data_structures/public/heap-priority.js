"use strict";
class PriortyHeap {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        const priorityElement = { element, priority };
        this.items.push(priorityElement);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.items.length - 1;
        const element = this.items[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.items[parentIndex];
            if (element.priority >= parent.priority)
                break;
            [this.items[parentIndex], this.items[index]] = [this.items[index], this.items[parentIndex]];
            index = parentIndex;
        }
    }
    dequeue() {
        if (this.items.length === 0)
            return undefined;
        const min = this.items[0];
        const end = this.items.pop();
        if (this.items.length > 0 && end) {
            this.items[0] = end;
            this.sinkDown();
        }
        return min.element;
    }
    sinkDown() {
        let index = 0;
        const length = this.items.length;
        const element = this.items[0];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.items[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.items[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null)
                break;
            [this.items[index], this.items[swap]] = [this.items[swap], this.items[index]];
            index = swap;
        }
    }
}
