function linearSearch<T>(value: T, arr: []) {
  for (let i of arr) {
    if (arr[i] === value) return i;
  }
  return -1;
}
