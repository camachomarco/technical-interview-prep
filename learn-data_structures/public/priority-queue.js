"use strict";
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    // Enqueue element based on priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }
    // Dequeue: Remove element with highest priority (lowest priority value)
    dequeue() {
        var _a;
        return (_a = this.items.shift()) === null || _a === void 0 ? void 0 : _a.element;
    }
    // Peek: Look at element with highest priority
    peek() {
        var _a;
        return (_a = this.items[0]) === null || _a === void 0 ? void 0 : _a.element;
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
const pq = new PriorityQueue();
pq.enqueue(1, 3);
pq.enqueue(2, 1);
pq.enqueue(3, 2);
console.log(pq.dequeue()); // Outputs 2 (highest priority)
pq.print(); // Outputs remaining queue
