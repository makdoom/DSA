let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

let index = -1;

let left = 0;
let right = nums.length - 1;

while (right >= left) {
  if (nums[left] == target) index = left;
  if (nums[right] == target) index = right;

  let middle = Math.floor((left + right) / 2);
  if (nums[middle] == target) index = middle;

  if (target > nums[middle]) left = middle + 1;
  else right = middle - 1;
}

console.log(index);
