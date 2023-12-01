"use strict";
class HashTable {
    constructor(capacity) {
        this.data = [];
        this.capacity = 100; // Default capacity
        this.size = 0; // Track the number of key-value pairs
        this.EXPAND_LOAD_FACTOR = 0.8;
        this.SHRINK_LOAD_FACTOR = 0.2;
        if (capacity)
            this.capacity = capacity;
        this.data = new Array(this.capacity);
    }
    hash(key) {
        let hashValue = 0;
        const stringKey = String(key);
        for (let i = 0; i < stringKey.length; i++) {
            const char = stringKey.charAt(i);
            const charCode = char.charCodeAt(0);
            hashValue += charCode << (i * 8);
        }
        return hashValue % this.capacity;
    }
    set(key, value) {
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
    get(key) {
        const index = this.hash(key);
        if (!this.data[index])
            return undefined;
        for (const pair of this.data[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }
    delete(key) {
        const index = this.hash(key);
        if (!this.data[index])
            return;
        let bucketSizeBefore = this.data[index].length;
        this.data[index] = this.data[index].filter((pair) => pair[0] !== key);
        this.size -= bucketSizeBefore - this.data[index].length;
        if (this.size / this.capacity < this.SHRINK_LOAD_FACTOR) {
            this.resize(Math.floor(this.capacity / 2));
        }
    }
    resize(newCapacity) {
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
const ht = new HashTable();
ht.set("a", 1);
console.log(ht.get("a")); // 1
ht.delete("a");
console.log(ht.get("a")); // undefined
