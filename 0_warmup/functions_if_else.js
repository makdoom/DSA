/*

AGENDA :
    - Funtions
    - If else statments
    - Different loops
    - Some programs

*/

//  Functions

// Function definition
function printHellWorld() {
  console.log("Hello World");
}

// Function calling
printHellWorld();

// Function to add dynamic two values
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(7, 10);

// Function to multiply numbers and return it
function productOfNumbers(a, b) {
  let product = a * b;

  return product;
}

console.log(productOfNumbers(7, 10));

// Write a function that accepts age and tells whether the person is eligable to vote or not
function eligableToVote(age) {
  if (age < 18) {
    console.log("Not eligable to vote");
  } else {
    console.log("eligable to vote");
  }
}

// eligableToVote(28);
eligableToVote(17);

// A program to check whether a number is even or odd
function isEvenOdd(number) {
  if (number % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

isEvenOdd(28);
isEvenOdd(3);
