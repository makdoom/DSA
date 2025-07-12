const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    if (nums[left] == target) return left;
    if (nums[right] == target) return right;

    let middle = Math.floor((left + right) / 2);
    if (nums[middle] == target) return middle;

    if (target > nums[middle]) left = middle + 1;
    else right = middle - 1;
  }
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

console.log(binarySearch(nums, target));
