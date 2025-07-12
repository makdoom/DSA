const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j + 1] < nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];

        isSwapped = true;
      }
    }

    if (!isSwapped) return nums;
  }

  return nums;
};

let nums = [-1, -41, 8, 2, 4, 10];

console.log(bubbleSort(nums));
