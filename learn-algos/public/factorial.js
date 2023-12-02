"use strict";
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function f(n) {
    if (n === 0)
        return 1;
    return n * f(n - 1);
}
// O(n)
console.log(f(6));
