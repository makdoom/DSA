const removeDuplicates = (nums) => {
  let uniqueElementIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[uniqueElementIndex]) {
      uniqueElementIndex += 1;
      nums[uniqueElementIndex] = nums[i];
    }
  }

  return uniqueElementIndex + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log({ k, nums });
