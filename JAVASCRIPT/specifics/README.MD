> © 2020 이응모 by WIKIBOOKS
# 목차
# [15장](#15장)
  - [let, const 키워드와 블록 레벨 스코프](#let,-const-키워드와-블록-레벨-스코프)
    - [var 변수의 문제점](#var-변수의-문제점)
    - [let](#let)
    - [const](#const) 
      + [재할당금지](#재할당금지)
      + [상수](#상수)
      + [const 키워드와 객체](#const-키워드와-객체)
  - [var or let or const](#var-or-let-or-const)

# [27장](#27장)
  - [배열요소 조작](#배열요소-조작)
  - [배열의 끝에 여러 요소 추가하기](#배열의-끝에-여러-요소-추가하기)
  - [배열 일부 가져오기](#배열-일부-가져오기)
  - [임의의 위치에 요소 추가하거나 제거하기](#임의의-위치에-요소-추가하거나-제거하기)
  - [summary](#summary)















# 15장 
---------------
## let, const 키워드와 블록 레벨 스코프
---------------
### var 변수의 문제점
* var 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정.
* 따라서 함수 외부에서 var 변수는 코드블록 내에서 선언해도 모두 전역 변수가 된다.

```javascript
var x = 1;
if (true) {
  var x = 10;
}
console.log(x); // 10
```
* for 문에서도 var 선언한 변수도 전역변수가 된다.
* 이는 의도치 않게 전역 변수가 중복 선언되는 경우가 발생한다
---------------
### let
* let 변수는 모든 코드 블록(if, for, while, try/catch..)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

```javascript
let foo = 1; // 전역변수
{
  let foo = 2; // 지역변수
  let bar = 3; //  지역변수
}
console.log(foo);   // 1
console.log(bar);   // ReferenceError: bar is not defined
```
---------------
### const
* const 변수는 선언과 동시에 초기화 해야한다.
* let 과 마찬가지로 Block Level Scope를 가진다.
```javascript
const foo = 1;
const poo; // SyntaxError: Missing initializer in const declaration
```
---------------
#### 재할당 금지
```javascript
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```
---------------
#### 상수
* 일반적으로 상수의 이름은 **대문자로 선언해 상수임을 명확히 나타낸다.**
* 여러 단어로 이루어진 경우 **underscore_로 구분해서 스네이크 케이스로 표현하는 것이 일반적**
```javascript
const TAX_RATE = 0.1;
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + ( preTaxPrice + TAX_RATE);
console.log(afterTaxPrice);
```
---------------
#### const 키워드와 객체
* const 재할당을 금지할 뿐 "불변"을 의미하지 않는다. 
* 즉 새로운 값을 재할당 하는 것은 불가능하지만 프로퍼티 동적생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다.
* 이때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.
---------------
## var or let or const
  * var는 사용하지 않는다.
  * 재할당이 필요한 경우 한정해 let를 사용한다. 이때 scope는 최대한 좁게 만든다.
  * 변수 선언시 일단 const로 선언. 반드시 재할딩이 필요하다면 그때 let으로 바꿔도 늦지 않다.

```javascript
let name = 'Irena';
let age = 25;

function greet() { console.log(`Hello, ${name}`);  }
function getBirthYear() { return new Date().getFullYear() - age;}
greet(); // Hello Irena
console.log(getBirthYear()); // 1997
```
* 문제점
  - 함수가 호출하는 컨텍스트(스코프)에 대단히 의존적이라는 것.
  - name value를 (의도 or 실수)바꿀 수 있다.
  - name과 age는 흔한이름므로 다른 곳에서 사용할 가능성이 크다

* 해결방법
  - **사용자 정보를 단일 객체에 보관하는 방법이 낫다**
```javascript
let user = { name = "Irena", age = 25}
function greet(user) { console.log(`Hello, ${user.name}`)}
function getBirthYear(user) { return new Date().getFullYear() - user.age;}
```
* **전역 스코프에 의존하지 않는 것이 정말 중요하다.**

  


# 27장

### 배열요소 조작

*** push는 배열 자체를 수정하며 concat은 새 배열을 반환한다.**
```javascript
const arr = ["b", "c", "d"];
arr.push("e");    // ["b", "c", "d", "e"]
arr.pop();        // ["b", "c", "d"]
arr.unshift("a"); // ["a", "b", "c", "d"]
arr.shift();      // ["b", "c", "d"]
```
---------------
### 배열의 끝에 여러 요소 추가하기

* **배열의 끝에 사본을 반환한다. 원본은 미적용**
* concat은 제공받은 배열을 한번만 분해한다. 배열안에 배열을 다시 분해하지 않는다.
```javascript
const arr = [1, 2, 3];
const newArray = arr.concat(4, 5, 6); // [ 1, 2, 3, 4, 5, 6 ]
const newArray1 = arr.concat([4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
const newArray2 = arr.concat([4, 5], 6); // [ 1, 2, 3, 4, 5, 6 ]
const newArray3 = arr.concat([4, [5, 6]]); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr); // [ 1, 2, 3 ]
```
----------------

### 배열 일부 가져오기

* 배열의 일부를 가져올 때는 slice 메서드 사용
* 매개변수 2개를 받는다. 첫번째는 어디서부터, 두번째는 어디까지
* 만약 2번째 매개변수를 생략한다면 배열의 마지막까지 반환
* 음수 인덱스를 쓸 수 있고 배열의 끝에서부터 요소를 카운트한다.
* 사본을 반환한다. 원본은 미적용한다.
```javascript
const arr = [1, 2, 3, 4, 5];
//
const arr1 = arr.slice(3); //[ 4, 5 ]
const arr2 = arr.slice(2, 4); // [ 3, 4 ]
const arr3 = arr.slice(-2); // [ 4, 5 ]
const arr4 = arr.slice(1, -2); // [ 2, 3 ]
const arr5 = arr.slice(-2, -1); // [ 4 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```
------------

### 임의의 위치에 요소 추가하거나 제거하기

* splice 배열은 자유롭게 수정할 수 있다.
* **첫 번째 매개변수는 수정을 시작할 인덱스이고 두번째 매개변수는 제거할 요소 숫자**
* **아무 요소도 제거하지 않을 때 0을 넘긴다.**
* 원본에 영향을 미침
```javascript
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); // [ 1, 2, 3, 4, 5, 7 ]
arr.splice(5, 0, 6); // [ 1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // [ 1, 4, 5, 6, 7 ]
arr.splice(2, 1, "a", "b"); // [ 1, 4, 'a', 'b', 6, 7 ]
console.log(arr); // [ 1, 4, 'a', 'b', 6, 7 ]
```
------------------
## summary
* 콜백 함수를 받는 find, findIndex, some, every, map, filter, reduce에서 콜백 함수가 제공 받는 매개변수
![table](../array/arrayRecap.png)
