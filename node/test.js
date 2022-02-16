// const returnFunction = () => (a, b) => a + b;

// const plus = returnFunction();

// console.log(plus(10, 20));

//-----------------------------------

// const countdown = (value) => {
//   if (value === 0) return value;
//   console.log(value);
//   return countdown(value - 1);
// };

// console.log(countdown(20));
//-----------------------------------

const sumNumber = (start, end, total) => {
  if (start > end) return total;
  return sumNumber(start + 1, end, total + start);
};
console.log(sumNumber(1, 10, 0));

//-----------------------------------
// factorial

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(4));

//-----------------------------------
// fibonacci

const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 1; i < 10; i += 1) {
  console.log(fibonacci(i));
}

//-----------------------------------
// make total sum with jaegwi

// const scores = [85, 95, 76];
// const sum = (list, total, length) => {
//   if (length === list.length) return total;
//   return sum(list, total + list[length], length + 1);
// };
// console.log(sum(scores, 0, 0));
