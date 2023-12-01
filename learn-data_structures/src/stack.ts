class Stack<T> {
  private items: T[] = [];

  // Push element onto stack
  push(element: T): void {
    this.items.push(element);
  }

  // Pop element off stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Peek at top of stack
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get stack size
  size(): number {
    return this.items.length;
  }

  // Print stack
  print(): void {
    console.log(this.items);
  }
}

// Usage
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // Outputs 3
myStack.print(); // Outputs [1, 2]
