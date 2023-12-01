class MinBinaryHeap<T> {
  private values: T[] = [];

  insert(value: T): void {
    this.values.push(value);
    this.bubbleUp();
  }

  private bubbleUp(): void {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element >= parent) break;

      [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
      index = parentIndex;
    }
  }

  extractMin(): T | null {
    if (this.values.length === 0) return null;

    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0 && end !== undefined) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  private sinkDown(): void {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: T | undefined, rightChild: T | undefined;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild!)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}
