
## Safari 리더 모드 및 기타 읽기 앱용 웹 사이트 구축

대체 읽기 모드는 사용자에게 향상된 가독성과 개인화의 옵션을 제공한다.
더 나은 접근성, 저소음 환경의 미학 등 여러가지 이유로 이러한 도구를 사용할 수 있다.

웹사이트가 사람들이 콘텐츠를 소비하는 방식에 상관 없이 사용자가 원하는 방식으로 해석되도록 해야하는게 맞다.

<img src="./HTML/images/semantic_tag.png">
> instapaper의 예. 왼쪽 (div) 오른쪽 (semantic)

왼쪽 이미지는 `<div>` 요소만 사용하고 오른쪽 이미지는 `시맨틱 HTML`을 사용
  
1. 페이지 제목이 다르다.
2. `<link> 페이지 인지 모르고 텍스트로 처리
3. 콘텐츠 스타일 지정이 없다.

`구조적` 또는 `Semantic HTML` 이 없기 때문에 페이지를 정의 할 수 없다.

**시맨틱 HTML 사용**

 Semantic HTMl 이 왜 중요한지, 읽기 모드와 앱이 왜 중요한지 자주 생각하는 것은 바람직한 일이다.
 이러한 도구와 앱은 페이지의 구조화된 콘텐츠를 가져와 맞춤스타일로 맞춰준다.

 `<article>`, `<nav>`, `<section>` 등
 페이지의 명확한 개요를 정의하고, 도구와 앱이 문서의 주요 목적 전달하는 것이 중요하다.

 **명확한 구조 및 계층 만들기**

 명확한 구조와 계층은 웹 페이지에서 가장 가치 있는 콘텐츠가 무엇인지 잘 이해할 수 있다.
 예를 들어 `<h1>`, `<h2>` 제목 요소는 명확한 문서 개요를 만들고 콘텐츠 계층 구조를 설명합니다.
 `<header>`와 `<footer>` 를 사용하여 기본 컨텐츠 영역을 형성하지 않은 페이지 부분을 식별할 수 있다.

**구조화된 데이터 사용**
`Microdata`는 웹 페이지의 콘텐츠 내 `메타 데이터`를 적용하는데 사용한다. `검색엔진`, `봇`, `브라우저` 및 `앱`과 같은 다른 기술은 마이크로데이타를 추출 및 이해하고 더 나은 브라우징 경험을 제공한다.




 


 > https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9


 >https://medium.com/@mandy.michael/understanding-why-semantic-html-is-important-as-told-by-typescript-bd71ad41e6c4