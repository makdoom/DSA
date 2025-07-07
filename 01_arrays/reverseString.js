let str = ["h", "e", "l,", "l", "o"];

let n = str.length;
for (let i = 0; i < Math.floor(n / 2); i++) {
  let temp = str[n - 1 - i];
  str[n - 1 - i] = str[i];
  str[i] = temp;
}

console.log(str);
