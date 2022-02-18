
## Safari 리더 모드 및 기타 읽기 앱용 웹 사이트 구축

대체 읽기 모드는 사용자에게 향상된 가독성과 개인화의 옵션을 제공한다.
더 나은 접근성, 저소음 환경의 미학 등 여러가지 이유로 이러한 도구를 사용할 수 있다.

웹사이트가 사람들이 콘텐츠를 소비하는 방식에 상관 없이 사용자가 원하는 방식으로 해석되도록 해야하는게 맞다.

<img src="./../../HTML/images/semantic_tag.png">
    
> instapaper의 예. 왼쪽 (Div) 오른쪽 (Semantic)

왼쪽 이미지는 `<div>` 요소만 사용하고 오른쪽 이미지는 `시맨틱 HTML`을 사용
  
1. 페이지 제목이 다르다.
2. `<link>` 페이지 인지 모르고 텍스트로 처리
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

---
## Basic sections of a document
Webpages can and will look pretty different from one another, but they all tend to share similar standard components, unless the page is displaying a fullscreen video or game, is part of some kind of art project, or is just badly structured:

### header:
* Usually a big strip across the top with a big heading, logo, and perhaps a tagline. This usually stays the same from one webpage to another.
  
  > 일반적으로 상단에 큰 제목, 로고 ​​및 태그라인이 있는 큰 스트립입니다. 이것은 일반적으로 한 웹페이지에서 다른 웹페이지로 동일하게 유지됩니다.

* represents a group of introductory content. If it is a child of `<body>` it defines the global header of a webpage, but if it's a child of an `<article>` or `<section>` it defines a specific header for that section (try not to confuse this with titles and headings).
  
 > 소개 콘텐츠 그룹을 나타냅니다. 자식인 `<body>` 경우 웹페이지의 전역 헤더를 정의하지만 자식인 경우 `<article>` 또는 해당 섹션에 대한 특정 헤더를 정의합니다( 제목 및 제목과 `<section>` 혼동하지 마십시오 ).


### navigation bar:
* Links to the site's main sections; usually represented by menu buttons, links, or tabs. Like the header, this content usually remains consistent from one webpage to another — having inconsistent navigation on your website will just lead to confused, frustrated users. Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that** having the two separate is better for accessibility**, as screen readers can read the two features better if they are separate.

  > 사이트의 주요 섹션에 대한 링크 일반적으로 메뉴 버튼, 링크 또는 탭으로 표시됩니다. 헤더와 마찬가지로 이 콘텐츠는 일반적으로 한 웹페이지에서 다른 웹페이지로 일관되게 유지됩니다. 웹사이트에서 일관되지 않은 탐색을 하면 사용자가 혼란스러워지고 좌절하게 될 것입니다. 많은 웹 디자이너는 **`nav`을 개별 구성 요소가 아니라 헤더의 일부로 간주하지만 이것이 필수 사항은 아닙니다.** 실제로 일부에서는 화면 판독기가 두 기능을 분리하면 더 잘 읽을 수 있으므로 **두 기능을 분리하는 것이 접근성** 에 더 좋다고 주장합니다.

* contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.

  > 페이지의 기본 탐색 기능을 포함합니다. 보조 링크 등은 탐색에 포함되지 않습니다.

---
###  main content:
A big area in the center that contains most of the unique content of a given webpage, for example, the video you want to watch, or the main story you're reading, or the map you want to view, or the news headlines, etc. This is the one part of the website that definitely will vary from page to page!

 > 이 페이지의 고유한 콘텐츠용 입니다. 페이지당 한 번만 사용 하고 내부에 직접 넣으십시오. 
   이상적으로는 다른 요소 내에 중첩되어서는 안 됩니다.`<body>`

### sidebar:
Some peripheral info, links, quotes, ads, etc. Usually, this is contextual to what is contained in the main content (for example on a news article page, the sidebar might contain the author's bio, or links to related articles) but there are also cases where you'll find some recurring elements like a secondary navigation system.

 > 일부 주변 정보, 링크, 인용문, 광고 등 일반적으로 주요 콘텐츠에 포함된 내용과 관련이 있지만(예: 뉴스 기사 페이지에서 사이드바에는 작성자의 약력 또는 관련 기사 링크가 포함될 수 있음) 또한 보조 탐색 시스템과 같은 반복적인 요소를 찾을 수 있습니다.

### footer:
* A strip across the bottom of the page that generally contains fine print, copyright notices, or contact info. It's a place to put common information (like the header) but usually, that information is not critical or secondary to the website itself. The footer is also sometimes used for SEO purposes, by providing links for quick access to popular content.
  
  > 일반적으로 작은 글씨, 저작권 표시 또는 연락처 정보가 포함된 페이지 하단의 스트립입니다. 헤더와 같은 일반적인 정보를 넣는 곳이지만 일반적으로 해당 정보는 웹사이트 자체에 중요하거나 부차적인 것이 아닙니다. 바닥글은 인기 있는 콘텐츠에 빠르게 액세스할 수 있는 링크를 제공하여 SEO 목적으로 사용되기도 합니다.

* represents a group of end content for a page.
 > 페이지의 최종 콘텐츠 그룹을 나타냅니다.

### section:
* is similar to `<article>`, but it is more for grouping together a single part of the page that constitutes one single piece of functionality (e.g., a mini map, or a set of article headlines and summaries), or a theme. It's considered best practice to begin each section with a heading; also note that you can break `<article>`s up into different `<section>`, or `<section>` up into different `<article>`s, depending on the context.
 
 > `<section>`은 `<article>`과 유사하지만 하나의 기능을 구성하는 페이지의 단일 부분(예: 미니 맵 또는 기사 헤드라인 및 요약 세트)을 그룹화하는 데 더 적합합니다. 테마. 각 섹션을 제목으로 시작하는 것이 모범 사례로 간주됩니다. 또한 컨텍스트에 따라 `<article>`을 다른 `<section>`으로 나누거나 `<section>`을 다른 `<article>`로 나눌 수 있습니다.

---

### article:
* encloses a block of related content that makes sense on its own without the rest of the page 
  (e.g., a single blog post).

  > 페이지의 나머지 부분 없이 자체적으로 의미가 있는 관련 콘텐츠 블록을 묶습니다(예: 단일 블로그 게시물).


  > 출저 : Document and website structure
  https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#Enter_HTML5_structural_elements
  ```









 > https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9


 >https://medium.com/@mandy.michael/understanding-why-semantic-html-is-important-as-told-by-typescript-bd71ad41e6c4




1. 헤더/푸터 : `<header>` 와 `<footer>` 사용
2. 메인 컨텐츠 :  `<main>` 과 `<section>` 사용
3. 독립적인 컨텐츠 :  `<article>` 사용
4. 최상위 제목 : `<h1>` 사용
5. 순서가 없는 목록 :  `<ul>`과 `<li>` 사용
6. 내비게이션 : `<nav>` 사용

* 검색엔진이 시맨틱 태그를 중요한 키워드로 간주하기 때문에 검색엔진 `최적화(SEO)`에 유리합니다.
* 웹 접근성 측면에서, 시각장애가 있는 사용자로 하여금 그 의미를 훨씬 잘 파악할 수 있습니다.
* 단순한 `div`, `span` 으로 둘러싸인 요소들보다 코드를 볼 때 가독성이 더 좋습니다.

`<article>`와 관련이 `<section>`있지만 분명히 다릅니다. `<section>` 콘텐츠 또는 기능의 개별 섹션을 그룹화하기 위한 반면 `<article>`, 개별 블로그 게시물, 비디오, 이미지 또는 뉴스 항목과 같은 관련 개별 ​​독립형 콘텐츠를 포함하기 위한 것입니다. 이러한 방식으로 생각하십시오. 콘텐츠 항목이 여러 개 있고 각 항목이 자체적으로 읽기에 적합하고 RSS 피드에서 별도의 항목으로 신디케이트하는 것이 합리적이라면 해당 항목 `<article>`을 표시하는 데 적합합니다.

섹션 요소는 문서 또는 애플리케이션의 일반 섹션을 나타냅니다. 이 컨텍스트에서 섹션은 일반적으로 제목이 있는 콘텐츠의 주제별 그룹입니다. [...]

`<article>` 태그에 대한 공식적인 사양은 다음과 같다.

Article 요소는 문서, 페이지, 애플리케이션에 포함되며, 그 자체로도 독자적으로 완성된 내용을 담고 있다. 원칙적으로 Article 요소에 담긴 내용은 기사 통합 서비스 등을 통해서 따로 배포되거나 재사용할 수 있다. Article 요소의 내용은 게시판 글이 될 수도 있고, 잡지나 뉴스의 기사, 블로그에 올린 글, 사용자가 올린 댓글, 상호작용할 수 있는 기능 모듈을 비롯해서 다른 어떤 종류의 독립적인 콘텐츠도 될 수 있다.

다시 말해서, 홈페이지에 블로그 글을 나열했다면 그것은 `<main>` 태그 안에 각 블로그 글을 하나씩 `<article>` 태그에 넣어 나열한 형식일 것이다. 블로그가 아니라 유튜브 홈페이지 같은 경우라면 동영상을 `<article>` 태그에 나열할 수 있을 것이고, 아마존 같은 사이트라면 상품 정보를 하나씩 `<article>`에 넣어 나열하는 식이 될 것이다. 이 모든 `<article>`은 말하자면 다른 형식으로 추출해서 제공할 수 있는 콘텐츠다. 스스로 독자적인 페이지가 되기도 하지만 다른 페이지에 광고로 등장할 수도 있고, 뉴스레터 기사 중 하나로 나타날 수도 있다.
애플 watchOS의 읽기 모드는 `<article>` 태그를 통해서 페이지의 본문을 파악한다. [애플의 설명](https://developer.apple.com/videos/play/wwdc2018/239/?time=349)을 들어보자.

`<h1>`을 여기저기 잔뜩 쓰지 말 것. 페이지의 주 제목으로 `<h1>`을 쓰고, 다음으로는 `<h2>`, `<h3>`, `<h4>`… 이런 식으로 순차적으로 제목의 깊이를 정한다.
글의 특정 영역이 시작하고 끝나는 지점을 스크린리더 사용자가 알아챌 수 있게 하려면 `<section>`과 aria-label을 사용하라. 그런 목적이 아니라면 그냥 다른 태그를 쓰도록 하자. 이를테면 `<aside aria-label=“간단 요약”>`이라고 한다거나, 굳이 `<div>` 태그를 써야 할 이유가 있다면 `<div role=“region” aria-label=“간단 요약”>`이라고 쓸 수도 있겠다.
`<main>`, `<header>`, `<footer>`, `<nav>` 등은 스크린리더 사용자에게 매우 유용한 태그이며, 보조 기술을 사용하지 않는 사람들에게는 아무 영향을 주지 않는다. 적극적으로 활용하자.
`<article>`은 블로그 글만을 위해서 만들어지지 않았으며, 독자적으로 완성된 콘텐츠는 무엇이든 담을 수 있다. 특히 watchOS에 콘텐츠가 제대로 표시될 수 있게 하는 데 큰 도움이 된다.




-------

# Responsive Web Design with HTML5 and CSS3
> Ben Frain (2012) 무당벌레 표지


### `<section>`

the `<section>` Element is used to define a generic section of a document or application.
for example, you may choose to create sections round your content; one section for contact information, another section for news feeds, and so on. It's important to understand that it isn't intended for styling purposes. if you need to wrap an element merely to style it, you should continue to use a `<div>` as you would have before

 > `<section>` 요소는 문서 또는 애플리케이션의 일반 섹션을 정의하는 데 사용됩니다.
예를 들어 콘텐츠 주위에 섹션을 만들도록 선택할 수 있습니다. 연락처 정보용 섹션, 뉴스 피드용 섹션 등. 스타일 지정을 위한 것이 아님을 이해하는 것이 중요합니다. 단순히 스타일을 지정하기 위해 요소를 래핑해야 하는 경우 이전과 같이 `<div>`를 계속 사용해야 합니다.

---
### `<header>`
the `<header>` element doesn't take part in the outline algorithm so can't be used to section content.
instead it should be usded as an introduction to content. Practically, the `<header>` can be used for the "masthead" area of site's header but also as an introduction to other content such as an introduction to a `<article>` element.
> `<header>` 요소는 개요 알고리즘에 참여하지 않으므로 섹션 콘텐츠에 사용할 수 없습니다.
대신 콘텐츠에 대한 소개로 사용해야 합니다. 실제로 `<header>`는 사이트 헤더의 "마스트헤드" 영역으로 사용될 수 있지만 `<article>` 요소에 대한 소개와 같은 다른 콘텐츠에 대한 소개로도 사용될 수 있습니다.

-----

### `<article>`
the `<article>` elements, alongside `<section>` can easily lead to confusion. i certainly had to read and re-read the specifications of each before it sank in. the `<article>` element is used to wrap a self-contained piece of content. when structuring a page, ask whether the content you are intending to use within a `<article>` tag could be taken as a whole lump and pasted onto a different site and still make complete sense? Another way to think about it is would the content being wrapped in `<article>` actually constitute a seperate article in a RSS feed? the obvious example of content that should be wrapped with an `<article>` element would be a blog post. Be aware that if nesting `<article>` elements it is presumed that the nested `<article> `elements are principally related to the outer article.

> `<section>`과 함께 `<article>` 요소는 쉽게 혼동을 일으킬 수 있습니다. 나는 확실히 침몰하기 전에 각각의 사양을 읽고 다시 읽어야 했습니다. `<article>` 요소는 자체 포함된 콘텐츠 조각을 래핑하는 데 사용됩니다. 페이지를 구성할 때 `<article>` 태그 내에서 사용하려는 콘텐츠가 전체 덩어리로 취해 다른 사이트에 붙여넣어도 여전히 완전한 의미가 있는지 물어보십시오. 그것에 대해 생각하는 또 다른 방법은 `<article>`에 래핑된 콘텐츠가 실제로 RSS 피드에서 별도의 기사를 구성하는 것입니까? `<article>` 요소로 래핑되어야 하는 콘텐츠의 명백한 예는 블로그 게시물입니다. `<article>` 요소를 중첩하는 경우 중첩된 `<article>` 요소는 주로 외부 기사와 관련이 있다고 가정합니다.