// [Example 01]

// const increase = function () {
//   let num = 0;

//   return function () {
//     return (num += 1);
//   };
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());

// // [Example 02]
// const counter = (function () {
//   let num = 0;

//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return num > 0 ? --num : 0;
//     },
//   };
// })();

// console.log(counter.increase(1));
// console.log(counter.increase(1));
// console.log(counter.decrease(1));
// console.log(counter.decrease(1));

// [Example 03]

// function makeCounter(predicate) {
//   let counter = 0;

//   return function () {
//     counter = predicate(counter);
//     return counter;
//   };
// }
// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());
