const arr = [5, 8, 6, 9, 8, 4, 133, 556, 8, 6, 85];

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

console.time("merge");
console.log(mergeSort(arr));
console.timeEnd("merge");
