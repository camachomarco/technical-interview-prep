type QueueElement<T> = {
  element: T;
  priority: number;
};

class PriorityQueue<T> {
  private items: Array<QueueElement<T>> = [];

  // Enqueue element based on priority
  enqueue(element: T, priority: number): void {
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
  dequeue(): T | undefined {
    return this.items.shift()?.element;
  }

  // Peek: Look at element with highest priority
  peek(): T | undefined {
    return this.items[0]?.element;
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
const pq = new PriorityQueue<number>();
pq.enqueue(1, 3);
pq.enqueue(2, 1);
pq.enqueue(3, 2);
console.log(pq.dequeue()); // Outputs 2 (highest priority)
pq.print(); // Outputs remaining queue
