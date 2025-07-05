const reverseNumber = (n) => {
  let copyN = n;
  let reverseNo = 0;

  if (n < 0) n = Math.abs(n);

  while (n > 0) {
    let rem = n % 10;
    reverseNo = reverseNo * 10 + rem;

    n = Math.floor(n / 10);
  }

  if (reverseNo < -2147483648 || reverseNo > 2147483647) return 0;

  return copyN < 0 ? -reverseNo : reverseNo;
};

console.log(reverseNumber(-123));
