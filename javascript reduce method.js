const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => {
  return acc + cur * cur;
}, 0);
console.log(sum);      //example 1

const max = numbers.reduce((acc, cur) => {
  return Math.max(acc, cur);
}, 0);
console.log(max);     //example 2

const result = numbers.reduce((acc, cur, idx) => {
  if (idx % 2 !== 1) {
    // Multiply odd-indexed elements
    acc *= cur;
  }
  return acc;
}, 1);
console.log(result);  //example 3
