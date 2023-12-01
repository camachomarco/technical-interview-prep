"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    // Push element onto stack
    push(element) {
        this.items.push(element);
    }
    // Pop element off stack
    pop() {
        return this.items.pop();
    }
    // Peek at top of stack
    peek() {
        return this.items[this.items.length - 1];
    }
    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Get stack size
    size() {
        return this.items.length;
    }
    // Print stack
    print() {
        console.log(this.items);
    }
}
// Usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // Outputs 3
myStack.print(); // Outputs [1, 2]
