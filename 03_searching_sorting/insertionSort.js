const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prevIdx = i - 1;

    while (nums[prevIdx] > curr && p >= 0) {
      nums[prevIdx + 1] = nums[prevIdx];
      prevIdx--;
    }

    nums[prevIdx + 1] = curr;
  }

  return nums;
};

let nums = [8, 1, 8, 2, 4, 10];

console.log(insertionSort(nums));
