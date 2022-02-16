### 함수 return 하기

```js
const returnFunction = () => (a, b) => a + b;

const plus = returnFunction();

console.log(plus(10, 20)) // 30
```

  1. 화살표 함수를 두 번 사용하였기 때문에 `returnFunction` 함수는 파라미터를 갖기 않은 함수
  2. 내부적으로 2개의 파라미터를 받아 그 합을 리턴하는 함수 그 자체를 리턴하는 함수
  3. 화살표 함수를 두 번 사용하는 것은 `커링(curing)`



### write
```js
const fs = require("fs");

const contents = "hello this is test!";
fs.writeFile("./message.txt", contents, "utf-8", function (error) {
  console.log("write end!");
});
```

---

### readFileSync() - 동기적 파일 열기

```js
const fs = require("fs");

const data = fs.readFileSync("./message.txt");
const string = data.toString();   // 문자열로 변환
console.log("sync work");
console.log(string);   // sync work hello this is test!
```

 ./message.txt를 불러옴
 `realFileSync` 는 동기적 읽기 함수로, 함수가 실행되면 해당 파일을 읽으면서 다른 작업을 동시에 불가능      
 프로그램 실행을 느리게 하지만, 설정파일을 읽고 적용하거나, 사용자 로그파일을 보고 출입을 허가해야 하는 등 실행순서가 보장해야 할때 사용

---
### readFile() - 비동기적 파일 열기

```js
const fs = require("fs");

fs.readFile("./message.txt", (err, data) => {
  if (err) throw err;
  console.log("Asunc work");
  console.log(data.toString());
});
```
비동기방식은 `return`이 없기 때문에 다음에 실행할 로직을 callback 함수를 이용해 넘겨주고 바로 이어서 실행하는 구조
(err, data) => {} 함수를 넘겼다.
해당 경로에 파일이 없는 경우 err 값이 들어오면 에러를 발생시킨다.

프로그램 형태에 따라 순서가 중요한 경우라면 `동기 방식`을 쓰고, 순서가 중요하지 않은 경우라면 `비동기 방식`이 효율적


---


### 파일 내용 수정하기

```js
const fs = require("fs");

fs.readFile("./message.txt", (err, data) => {
  if (err) throw err;
  let contents = data.toString();
  contents = "replaced test file";
  fs.writeFile("./message.txt", contents, "utf-8", function (error) {
    //function(error) 추가
    console.log("replace end!");
  });
});
```

---
### 파일에 내용 추가하기 
```js
const fs = require("fs");

const list = [1, 2, 3, 4, 5];

list.forEach((item) =>
  fs.appendFile("./message.txt", `Chapter ${item}\n`, function (error) {
    console.log("write end!");
  })
  );
```
---

### fs.mkdirSync() - 디렉토리 만들기

```js
const fs = require("fs");

const dirName = `${__dirname}/img`;

if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}

// 실행환경 디렉토리의 절대경로를 받아온다. 소스파일이 들어 있는 디렉토리까지의 절대경로에 /img 하위 디렉토리 생성
// fs.existsSync(dirName) dirName에서 지정한 디렉토리가 있는지 확인하는 함수

```