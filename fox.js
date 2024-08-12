"use strict";

const arr = [1, 2, 3, 4, 5, 6];

let sum = 0;

const arrSumReturn = function () {
  arr.forEach((i) => {
    sum += i;
  });
};
console.log(sum);
arrSumReturn();
