
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
* 여러 단어로 이루어진 경우** underscore_로 구분해서 스네이크 케이스로 표현하는 것이 일반적**
```javascript
const TAX_RATE = 0.1;
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + ( preTaxPrice + TAX_RATE);
console.log(afterTaxPrice);
```
---------------
#### const 키워드와 객체
* const 재할당을 금지할 뿐 "불변"을 의미하지 않는다. 
* 즉 새로운 값을 재할당 하는 것은 불가능하지만 프로퍼티 동적생성, 삭제, * 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다.
* *때 객체가 변경되더라도 변수에 할당된 참조 값은 변경되지 않는다.
---------------
## var or let or const
  * VAR는 사용하지 않는다.
  * 재할당이 필요한 경우 한정해 let를 사용한다. 이때 Scope는 최대한 좁게 만든다.
  * 변수 선언시 일단 const로 선언. 반드시 재할딩이 필요하다면 그때 let으로 바꿔도 늦지 않다.


  

