// print numbers form 1 to n

let n = 10;
const print = (num) => {
  if (num > n) return;

  console.log(num);
  print(++num);
};

print(1);
