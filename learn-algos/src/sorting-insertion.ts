function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const array = [2, 33, 55, -2, 3];
insertionSort(array);
console.log(array);

// O(n^2)
