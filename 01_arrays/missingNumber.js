let nums = [0, 4, 2, 1, 5];
let n = nums.length;

let sum = (n * (n + 1)) / 2;
let numSum = 0;
for (let num of nums) {
  numSum += num;
}

console.log(sum - numSum);
