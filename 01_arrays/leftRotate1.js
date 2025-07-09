let nums = [1, 2, 3, 4, 5];

let temp = nums[0];

for (let i = 1; i <= nums.length; i++) {
  nums[i - 1] = nums[i];
}

nums[nums.length - 1] = temp;

console.log(nums);

[1, 2, 3, 4, 5, 6, 7]

[4,3, 2, 1, 7, 6, 5]
[5, 6, 7, 1, 2,3, 4]