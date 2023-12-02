"use strict";
function binarySearch(target, arr) {
    // Binary Search only works on sorted arrays
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
// O(log n)
function recursiveBS(target, arr) {
    return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, left, right) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        return search(arr, target, left, mid - 1);
    }
    else {
        return search(arr, target, mid + 1, right);
    }
}
// O(log n)
