const removeDuplicates = (nums, val) => {
  let uniqueEleIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[uniqueEleIndx] = nums[i];
      uniqueEleIndx++;
    }
  }

  return uniqueEleIndx;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let k = removeDuplicates(nums, 2);
console.log({ k, nums });
