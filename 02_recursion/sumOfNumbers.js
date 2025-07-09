let nums = [5, 2, 3, 4, 1, 0];

// const sum = (n) => {
//   if (n == 0) return nums[0];

//   if (nums[n] % 2 == 0) {
//     return nums[n] + sum(n - 1);
//   } else {
//     return nums[0] + sum(0);
//   }
// };

// console.log(sum(nums.length - 1));

const sumOfOdd = (n) => {
  const isOdd = nums[n] % 2 !== 0;

  if (n == 0) {
    return isOdd ? nums[n] : 0;
  }

  return (isOdd ? nums[n] : 0) + sumOfOdd(n - 1);
};

console.log(sumOfOdd(nums.length - 1));
