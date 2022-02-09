# HTML
  ## 2-1 HTML파일 둘러보기
  
  ### 태그(tag)
  * 브라우저가 웹 문서를 잘 이해할 수 있도록 콘텐츠에 맞게 분류한 규칙
  
  ### 기본구조
  * `<!DOCTYPE html>` : 웹 표준 문서임을 선언
  * `<head>` : 웹 문서에 필요한 외부 파일과 옵션을 설정하는 공간
    + `<meta charset="UTF-8'>` : 웹 문서 인코딩 방식
    + `<meta http-equiv="X-UA-Compatible" content="IE=EDGE">` : User 익스플로러 이용한다면 최신 버전인 Edge 화면을 보여주는 기능.
    + `<meta name="viewport" content="width=device-width, initial-scale=1.0"> : 디바이스 종류별 화면에 출력할 방식 지정. `viewport`가 있어야 반응형 웹페이지 작성시 모바일화면에 출력이 가능하다 
  * `<body>` : 웹  브라우저에 내용을 출력하는 공간
----------
  ## 2-2 시맨틱 태그 - 웹페이지 구조 나누기
  * 집을 지을 때에는 방, 거실, 주방, 화장실을 어디에 배치할 지 전체적인 구조를 나누듯 웹페이지도 `시멘틱태그`를 이용해서 기본구조를 설정해야 한다.
    + `<header>` : 웹 문서 머리말
    + `<nav>` : 메뉴영역
    + `<figure>` : 동영상, 사진 등 멀티미디어 영역
    + `<main>` : 본문 컨텐츠 영역
    + `<aside>` : 본문과 연관성이 적은 외부 영역
    + `<section>`: 특정 영역을 그룹화
    + `<article>` : 기사나 개별 콘텐츠 영역
    + `<footer>` : 꼬리말 영역
![symantic](./structure1.png)
  * [Example 01]
    ```html
    <body>
        <header>
          <nav> </nav>
        </header>

        <figure></figure>
        
        <section>
          <article></article>
          <article></article>
          <article></article>
        </section>

        <footer></footer>
    </body>
    ```
------------
## 2-3 서식태그 - 텍스트를 넣어 웹 페이지 채우기
  ```HTML
  <h1>~<h6> : 제목 태그
  <p> : 문단 태그, 글을 묶어서 나타낸다.
  <div> : 콘텐츠를 그룹화
  <strong>, <em> : 특정 문장, 단어 강조
  <a> : 페이지를 이동하는 링크
  <span> : 인라인 요소 그룹화
  <img> : 이미지 삽입
  <br> : 강제로 줄 바꿈
  ```

 >  TIP : `<p>` lorem5 `</p>` `lorem`단어와 `5`를 붙여서 입력한 후 `Enter`를 누르면 테스트용 단어가 자동으로 만들어진다. 

 * `<a>` 
    + ```html
      <a href="https://www.naver.com" target="blank">네이버</a>
       ```
      + 새로운 탭을 열어서 링크를 이동하려면 `target`속성 이용

## 2-4 Form 태그 - 사용자 정보 입력받기


## Input tag  

  * label + input 함께 사용하지 않았을 때는 input tag를 정확히 클릭해야만 함
  
  ![without_label](withoutLabel.png)
  ![with_label](withLabel.png)
  * radio의 `name 값`이 일치해야 선택 그룹으로 묶인다.
    + 문제보기가 4개인 경우에서 1개만 선택할 경우 같은 `name="answer"`로 그룹화해야만 단일 선택이 가능.

  ```javascript
  <li>
    <input type="radio" id="a" name="answer" class="answer" />
    <label id="a_text" for="a">Question</label>
  </li>
  ```
  -------------
### required 속성
  * input 이 비어있으면 자동으로 필수값으로 값을 넣으라고 해주는 유효성 체크 항목.
```javascript
  <input type="text" name="title" id="title" required/>
```
![required](./required.jpeg)
  * required 속성이 제대로 동작하는 input 요소의 type 속성값은 다음과 같다.
    + checkbox, date, email, file, number, password,
      pickers, radio, search, tel, text, url
  * required 속성은 불리언(boolean) 속성.
  * 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가진다.