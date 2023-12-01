class DoublyNode<T> {
  constructor(public data: T, public next: DoublyNode<T> | null = null, public prev: DoublyNode<T> | null = null) {}
}

class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null = null;
  private tail: DoublyNode<T> | null = null;

  // Add to the end
  append(data: T): void {
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
  removeFirst(): void {
    if (!this.head) return;
    if (this.head.next) {
      this.head.next.prev = null;
    }
    this.head = this.head.next;
  }

  // Display list
  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Usage
const myDoublyList = new DoublyLinkedList<number>();
myList.append(1);
myList.append(2);
myList.append(3);
myList.removeFirst();
myList.printList();
