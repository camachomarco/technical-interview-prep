"use strict";
function powerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}
// O(log n)
function bitwise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
// O(1)
