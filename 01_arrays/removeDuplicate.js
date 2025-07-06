const removeDuplicates = (nums) => {
  let uniqueEleIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[uniqueEleIndx]) {
      uniqueEleIndx += 1;
      nums[uniqueEleIndx] = nums[i];
    }
  }

  return uniqueEleIndx + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log({ k, nums });
