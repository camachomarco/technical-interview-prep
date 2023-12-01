"use strict";
class CirculasrQueue {
    constructor(capacity, queue = new Array(capacity).fill(null), head = 0, tail = 0, count = 0) {
        this.capacity = capacity;
        this.queue = queue;
        this.head = head;
        this.tail = tail;
        this.count = count;
    }
}
