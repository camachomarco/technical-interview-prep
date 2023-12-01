// update all methods so that they work with this.tail implementation too
class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  public size: number = 0;
  public tail: ListNode<T> | null = null;

  // Insert at index
  insert(index: number, value: T) {
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
      prev = prev!.next;
    }
    node.next = prev!.next;
    prev!.next = node;
    this.size++;
  }

  // Remove at index
  removeFrom(index: number): ListNode<T> | null {
    if (this.size <= 0) return null;
    if (index < 0 || index > this.size - 1) {
      return null;
    }
    let removedNode: ListNode<T>;
    if (index === 0) {
      removedNode = this.head!;
      this.head = this.head!.next;
    } else {
      let prev: ListNode<T> = this.head!;
      for (let i = 0; i < index - 1; i++) {
        prev = prev!.next!;
      }
      removedNode = prev!.next!;
      prev!.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  // Add at start
  prepend(value: T): void {
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
  append(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return;
    }
    this.tail!.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  isEmpty(): boolean {
    return this.head ? false : true;
  }

  getSize(): number {
    let current = this.head;
    let count = this.head ? 1 : 0;
    while (current?.next) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  // Remove from front
  removeFirst(): null | ListNode<T> {
    if (!this.head) return null;
    let removed = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return removed;
  }

  removeEnd(): null | ListNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    let removed = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev!.next !== this.tail) {
        prev = prev!.next;
      }
      prev!.next = null;
      this.tail = prev;
    }
    this.size--;
    return removed;
  }

  // Remove node from value
  removeValue(value: T): T | null {
    if (this.isEmpty()) return null;
    if (this.head!.value === value) {
      this.head! = this.head!.next!;
      this.size--;
      return value;
    }
    let prev = this.head!;
    while (prev.next!.value !== value && prev.next) {
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

  search(value: T): number | null {
    if (!value) return -1;
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
    } else {
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
  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Usage
const myList = new LinkedList<number>();
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
