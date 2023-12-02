"use strict";
function linearSearch(value, arr) {
    for (let i of arr) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}
