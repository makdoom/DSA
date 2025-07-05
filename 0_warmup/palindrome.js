const isPalindrome = function (x) {
  let n = x;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;

    n = Math.floor(n / 10);
  }

  return rev == x;
};

console.log(isPalindrome(-121));
