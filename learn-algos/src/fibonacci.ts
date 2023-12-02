function fibonacci(n: number) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// O(n)

function fibRecursive(n: number): number {
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// O(2^n)

console.log(fibRecursive(3));
