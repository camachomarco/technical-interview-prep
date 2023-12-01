"use strict";
// update all methods so that they work with this.tail implementation too
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    // Insert at index
    insert(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const node = new ListNode(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
    // Remove at index
    removeFrom(index) {
        if (this.size <= 0)
            return null;
        if (index < 0 || index > this.size - 1) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode;
    }
    // Add at start
    prepend(value) {
        const newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size += 1;
    }
    // Add to the end
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size += 1;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }
    isEmpty() {
        return this.head ? false : true;
    }
    getSize() {
        let current = this.head;
        let count = this.head ? 1 : 0;
        while (current === null || current === void 0 ? void 0 : current.next) {
            count += 1;
            current = current.next;
        }
        return count;
    }
    // Remove from front
    removeFirst() {
        if (!this.head)
            return null;
        let removed = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return removed;
    }
    removeEnd() {
        if (this.isEmpty()) {
            return null;
        }
        let removed = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return removed;
    }
    // Remove node from value
    removeValue(value) {
        if (this.isEmpty())
            return null;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        let prev = this.head;
        while (prev.next.value !== value && prev.next) {
            prev = prev.next;
        }
        if (prev.next) {
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
        }
        return null;
    }
    search(value) {
        if (!value)
            return -1;
        if (this.isEmpty()) {
            return -1;
        }
        let index = 0;
        let current = this.head;
        while (current && current.value !== value) {
            index++;
            current = current.next;
        }
        if (current) {
            return index;
        }
        else {
            return -1;
        }
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    // Display list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
// Usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(55);
myList.append(533);
console.log(myList.getSize());
// myList.insert(3, 77);
// myList.insert(4, 88);
console.log(myList.getSize());
// console.log(myList.removeFrom(5));
console.log(myList.getSize());
console.log(myList.getSize());
console.log(myList.search(88));
myList.append(34);
console.log(myList.getSize());
// myList.reverse();
myList.printList();
