/*

1.
    *****
    *****
    *****
    *****

*/
// let n = 10;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

/*
2.

    *
    * *
    * * *
    * * * *
    * * * * *
*/
// let n = 10;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

/*
3.

    1
    10
    101
    1010
    10101

*/

// for (let i = 0; i < 10; i++) {
//   let row = "";
//   for (let j = 1; j < i + 1; j++) {
//     if (j % 2 == 0) {
//       row += ` ${0}`;
//     } else {
//       row += ` ${1}`;
//     }
//   }
//   console.log(row);
// }

/*
3.

    1
    12
    123
    1234
    12345

*/

// let n = 10;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 1; j < i + 1; j++) {
//     row += `$j} `;
//   }
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < n - i - 1; j++) {
//     row += " ";
//   }

//   for (let k = 0; k < 2 * i + 1; k++) {
//     row += "*";
//   }

//   for (let j = 0; j < n - i - 1; j++) {
//     row += " ";
//   }

//   console.log(row);
// }

/*

*
**
***
****
*****
****
***
**
*

*/
let n = 5;
for (let i = 1; i <= 2 * n - 1; i++) {
  let row = "";
  let count = i;
  if (i > n) count = 2 * n - i;
  for (let j = 0; j < count; j++) {
    row += "*";
  }

  console.log(row);
}
