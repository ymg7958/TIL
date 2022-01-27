```javascript
let name = 'Irena';
let age = 25;

function greet() { console.log(`Hello, ${name}`);  }

function getBirthYear() { return new Date().getFullYear() - age;}
greet(); // Hello Irena
console.log(getBirthYear()); // 1997
```
문제점 : 함수가 호출하는 컨텍스트(스코프)에 대단히 의존적이라는 것.
      name value를 (의도 or 실수)바꿀 수 있다.
      name과 age는 흔한이름므로 다른 곳에서 사용할 가능성이 크다

해결방법 : 사용자 정보를 단일 객체에 보관하는 방법이 낫다
```javascript
let user = { name = "Irena", age = 25}
function greet(user) { console.log(`Hello, ${user.name}`)}
function getBirthYear(user) { return new Date().getFullYear() - user.age;}
```
전역 스코프에 의존하지 않는 것이 정말 중요하다.