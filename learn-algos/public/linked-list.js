"use strict";
class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    // Add to the end
    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    // Remove from start
    removeFirst() {
        if (!this.head)
            return;
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
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.removeFirst();
myList.printList();
