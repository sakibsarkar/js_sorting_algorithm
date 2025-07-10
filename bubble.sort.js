const x = [5, 8, 6, 9, 8, 4, 133, 556, 8, 6, 85];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.time("bubble");
console.log(bubbleSort(x));
console.timeEnd("bubble");
