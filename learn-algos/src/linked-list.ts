class ListNode<T> {
  constructor(public data: T, public next: ListNode<T> | null = null) {}
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;

  // Add to the end
  append(data: T): void {
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
  removeFirst(): void {
    if (!this.head) return;
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
const myList = new LinkedList<number>();
myList.append(1);
myList.append(2);
myList.append(3);
myList.removeFirst();
myList.printList();
