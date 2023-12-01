class HashTable<K, V> {
  private data: Array<[K, V][]> = [];
  private capacity: number = 100; // Default capacity
  private size: number = 0; // Track the number of key-value pairs

  private readonly EXPAND_LOAD_FACTOR = 0.8;
  private readonly SHRINK_LOAD_FACTOR = 0.2;

  constructor(capacity?: number) {
    if (capacity) this.capacity = capacity;
    this.data = new Array(this.capacity);
  }

  private hash(key: K): number {
    let hashValue = 0;
    const stringKey = String(key);
    for (let i = 0; i < stringKey.length; i++) {
      const char = stringKey.charAt(i);
      const charCode = char.charCodeAt(0);
      hashValue += charCode << (i * 8);
    }
    return hashValue % this.capacity;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }

    // Check if key already exists, if so, overwrite it with new value
    let keyExists = false;
    for (const pair of this.data[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        keyExists = true;
        break;
      }
    }
    // if key doesnt exist: add new value to index (separate chaining)
    if (!keyExists) {
      this.data[index].push([key, value]);
      this.size++;

      if (this.size / this.capacity > this.EXPAND_LOAD_FACTOR) {
        this.resize(this.capacity * 2);
      }
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    if (!this.data[index]) return undefined;
    for (const pair of this.data[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  delete(key: K): void {
    const index = this.hash(key);
    if (!this.data[index]) return;
    let bucketSizeBefore = this.data[index].length;
    this.data[index] = this.data[index].filter((pair) => pair[0] !== key);
    this.size -= bucketSizeBefore - this.data[index].length;

    if (this.size / this.capacity < this.SHRINK_LOAD_FACTOR) {
      this.resize(Math.floor(this.capacity / 2));
    }
  }

  private resize(newCapacity: number) {
    const oldData = this.data;
    this.data = new Array(newCapacity);
    this.capacity = newCapacity;
    this.size = 0; // Reset size and re-calculate during rehash

    for (const bucket of oldData) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}

// Example usage:
const ht = new HashTable<string, number>();
ht.set("a", 1);
console.log(ht.get("a")); // 1
ht.delete("a");
console.log(ht.get("a")); // undefined
