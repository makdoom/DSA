// let nums1 = [2, 3, 3, 7];
// let nums2 = [1, 5, 6];

// let m = 4;
// let n = 3;

// let p1 = 0;
// let p2 = 0;

// let num1Copy = [...nums1];

// for (let i = 0; i < m + n; i++) {
//   if (p2 >= n || (p1 < m && num1Copy[p1] < nums2[p2])) {
//     nums1[i] = num1Copy[p1];
//     p1++;
//   } else {
//     nums1[i] = nums2[p2];
//     p2++;
//   }
// }

// console.log({ nums1 });

let num1 = [1, 2, 3, 0, 0, 0];
let num2 = [2, 5, 6];

let m = 3;
let n = 3;

let p1 = m - 1;
let p2 = n - 1;

for (let i = m + n - 1; i >= 0; i--) {
  if (p2 < 0) break;

  if (num1[p1] > num2[p2] && p1 >= 0) {
    num1[i] = num1[p1];
    p1--;
  } else {
    num1[i] = num2[p2];
    p2--;
  }
}

console.log(num1);
