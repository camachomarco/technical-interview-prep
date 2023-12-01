class QueueAlt<T> {
  public rear: number = 0;
  public front: number = 0;
  public items: { [key: number]: T } = {};

  enqueue(item: T) {
    this.items[this.rear] = item;

    this.rear++;
  }

  dequeue(): T {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.rear - this.front === 0;
  }

  peek(): T {
    return this.items[this.front];
  }

  size(): number {
    return this.rear - this.front;
  }

  print(): void {
    return console.log(this.items);
  }
}
