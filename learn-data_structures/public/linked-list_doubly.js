"use strict";
class DoublyNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // Add to the end
    append(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    // Remove from start
    removeFirst() {
        if (!this.head)
            return;
        if (this.head.next) {
            this.head.next.prev = null;
        }
        this.head = this.head.next;
    }
    // Display list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
// Usage
const myDoublyList = new DoublyLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.removeFirst();
myList.printList();
