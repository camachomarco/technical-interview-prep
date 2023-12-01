"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    // Enqueue: Add to the end
    enqueue(element) {
        this.items.push(element);
    }
    // Dequeue: Remove from the start
    dequeue() {
        return this.items.shift();
    }
    // Peek: Look at the first element
    peek() {
        return this.items[0];
    }
    // IsEmpty: Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Size: Get the size of the queue
    size() {
        return this.items.length;
    }
    // Print: Display the queue
    print() {
        console.log(this.items);
    }
}
// Usage
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // Outputs 1
myQueue.print(); // Outputs [2, 3]
