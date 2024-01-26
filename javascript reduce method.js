const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => {
  return acc + cur * cur;
}, 0);
console.log(sum);
const max = numbers.reduce((acc, cur) => {
  return Math.max(acc, cur);
}, 6);

console.log(max);

const result = numbers.reduce((acc, cur, idx) => {
  if (idx % 2 !== 1) {
    // Multiply odd-indexed elements
    acc *= cur;
  }
  return acc;
}, 1);
console.log(result);
