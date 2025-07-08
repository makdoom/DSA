let prices = [8, 6, 4, 3, 10]; //[7, 1, 5, 3, 6, 4];

let buy = prices[0];
let sell = prices[0];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] < buy) {
    buy = prices[i];
    sell = prices[i];
  } else if (prices[i] > sell) {
    sell = prices[i];
  }
}

console.log(sell - buy);

console.log({ buy, sell });
