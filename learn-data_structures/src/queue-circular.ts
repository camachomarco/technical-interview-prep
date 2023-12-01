class CircularQueue<T> {
  private queue: Array<T | null>;
  private head: number;
  private tail: number;
  private count: number;
  private capacity: number;

  constructor(public size: number) {
    this.capacity = size;
    this.queue = new Array(size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enqueue(item: T): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return item;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  getSize(): number {
    return this.count;
  }
}
