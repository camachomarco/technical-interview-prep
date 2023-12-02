function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift() as number);
    } else {
      sortedArr.push(rightArr.shift() as number);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr3 = [2, 55, -4, 11, -6];

// O(n log n)
