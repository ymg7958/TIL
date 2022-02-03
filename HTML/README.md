# Input tag
  

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
