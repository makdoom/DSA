let nums = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];

let max = 0;
let sMax = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 1) {
    max++;
  } else {
    sMax = Math.max(max, sMax);
    max = 0;
  }
}

console.log(max > sMax ? max : sMax);
