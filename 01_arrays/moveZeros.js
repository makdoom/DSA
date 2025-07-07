let nums = [
  45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645,
  -17025, 81209, 887, 64648,
];

let p1 = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[p1] !== 0) {
    p1++;
  } else if (nums[i] !== 0) {
    nums[p1] = nums[i];
    nums[i] = 0;

    p1++;
  }
}

console.log(nums);
