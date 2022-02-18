### 합계 구하기
```js
const students = [
  { name: "a", age: 31, score: 85 }, 
   { name: "b", age: 31, score: 95 },
    { name: "c", age: 35, score: 76 },
    ];

const avg = students
  .filter((student) => student.age >= 21 && student.age < 30)
  .map((student) => student.score)
  .reduce(
    (previous, current, array) => previous + current / array.length,0);
    console.log(avg.toFixed(2));
```
-----

### 합계 구하기
```js
const values = [1, 2, 3, 4, 5, 6];
const avg = values.reduce((previous, current) => previous + current, 0);
```
----
최대값 구하기
```js
const values = [1, 2, 3, 4, 5, 6];
const avg = values.reduce(
  (previous, current) => (previous > current ? previous : current),
  0
);
```
---

최대값 구하기 
```js
const max = Math.max(...values);
```
---
요소의 중복 횟수 구하기
```js
const fruits = ["banana", "apple", "orange", "apple", "orange", "apple"];
const count = fruits.reduce((init, curr) => {
  init[curr] = (init[curr] || 0) + 1;
  return init;
}, {});
console.log(count);
```

---


중첩 배영 평탄화
```js
const values = [1, [2, 3], 4, [5, 6]];
//concat : 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가하여 새로운 배열을 반환
//push, unshift를 대체할 수 있고 차이는 원본, concat은 사본
const flat = values.reduce((init, curr) => init.concat(curr), []);

    //내장메서드 : flat 메서드 사용이 더 직관적
    //float(2) : 인수 2는 중첩 배열을 평탄화 하기 위한 깊이 값.
    [1, [2, 3], 4, [5, 6]].flat(2) -> [1,2,3,4,5,6]
```
---


### 중복 요소 제거
```js
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values.reduce((init, curr, index, array) => {
  if (array.indexOf(curr) === index) {
    init.push(curr); }
  return init; // return 값은 `[]` 이므로, 결과에 영향이 없다.
}, []);
```
----
```js
const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20));
```
---
```js
const countdown = (value) => {
  if (value === 0) return value;
  console.log(value);
  return countdown(value - 1);
};

console.log(countdown(20));
```
---
```js
const sumNumber = (start, end, total) => {
  if (start > end) return total;
  return sumNumber(start + 1, end, total + start);
};
console.log(sumNumber(1, 10, 0));

```
---

### factorial
```js
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(4));
```

---
### fibonacci
```js

const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

for (let i = 1; i < 10; i += 1) {
  console.log(fibonacci(i));
}
```

### make total sum with jaegwi

```js
const scores = [85, 95, 76];
const sum = (list, total, length) => {
  if (length === list.length) return total;
  return sum(list, total + list[length], length + 1);
};
console.log(sum(scores, 0, 0));
```