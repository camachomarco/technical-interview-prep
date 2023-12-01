"use strict";
class CircularQueue {
    constructor(size) {
        this.size = size;
        this.capacity = size;
        this.queue = new Array(size).fill(null);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }
    enqueue(item) {
        if (this.isFull()) {
            return false;
        }
        this.queue[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.count++;
        return true;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.queue[this.head];
        this.queue[this.head] = null;
        this.head = (this.head + 1) % this.capacity;
        this.count--;
        return item;
    }
    isFull() {
        return this.count === this.capacity;
    }
    isEmpty() {
        return this.count === 0;
    }
    getSize() {
        return this.count;
    }
}
