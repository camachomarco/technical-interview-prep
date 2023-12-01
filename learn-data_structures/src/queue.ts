class Queue<T> {
  private items: T[] = [];

  // Enqueue: Add to the end
  enqueue(element: T): void {
    this.items.push(element);
  }

  // Dequeue: Remove from the start
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Peek: Look at the first element
  peek(): T | undefined {
    return this.items[0];
  }

  // IsEmpty: Check if queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Size: Get the size of the queue
  size(): number {
    return this.items.length;
  }

  // Print: Display the queue
  print(): void {
    console.log(this.items);
  }
}

// Usage
const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue()); // Outputs 1
myQueue.print(); // Outputs [2, 3]
