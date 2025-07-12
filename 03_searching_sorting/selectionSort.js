const selectionSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    if (min !== i) [nums[min], nums[i]] = [nums[i], nums[min]];
  }
  return nums;
};

let nums = [7, 1, 5, 4, 3, 2];

console.log(selectionSort(nums));
