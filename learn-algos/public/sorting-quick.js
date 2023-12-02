"use strict";
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr2 = [-6, 20, 8, -2, 4];
let sorted = quickSort(arr2);
console.log(sorted);
// O(n^2) - worst case
// O(n log n) - average
