const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let arr = [];

  console.log({ left, right });
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  return [...arr, ...left.slice(i), ...right.slice(j)];
};

let nums = [7, 1, 5, 4, 3, 2];

console.log(mergeSort(nums));
