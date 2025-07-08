let nums = [4, 4, 1, 2, 1, 2, 8];
// let obj = {};

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] in obj) {
//     obj[nums[i]] += 1;
//   } else {
//     obj[nums[i]] = 1;
//   }
// }

// for (let i = 0; i < nums.length; i++) {
//   if (obj[nums[i]] == 1) {
//     console.log(nums[i]);
//     return;
//   }
// }

let xor = 0;
for (let num of nums) {
  xor ^= num;
}

console.log(xor);
