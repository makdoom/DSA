// for loop
// for (let i = 0; i <= 2; i++) {
//   //initialization, conditions. incr/decr
//   console.log("hello");
// }

// // While loop
// let i = 0;
// while (i <= 5) {
//   console.log("Hello world");
//   i++;
// }

// Write a function to find an index of a number in an array
// let arr = [4, 5, 89, 37, 45, 2, 13, 90];

// function findNumberIndex(number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == number) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(findNumberIndex(89));

// wrie a fucntion that returns number of negative nubers in an array
// let arr = [1, -9, 0, 3, 4, -4, -5, -2, 37];

// function negativeNumbers(arr) {
//   let negativeNumbersCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) negativeNumbersCount += 1;
//   }

//   return negativeNumbersCount;
// }

// console.log(negativeNumbers(arr));

// write a function to find the largest number in an array

let arr = [34, 30, 52, 6, 7, 8, 4, 23, 54, 76];

// function findLargest(arr) {
//   // Here we must make sure the initial number should not be present in arr
//   // let largest = -Infinity; // -Infinity is smallest value in JS. Every number is greater than -Infinity
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargest(arr));

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest(arr));
