## 13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```JS
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

### 소스코드
```JS
const romanInt = function (letter) {
  const romanSet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let addedNum = 0;

  for (let i = 0; i < letter.length; i++) {
    const currentLetter = romanSet[letter[i]];
    const nextLetter = romanSet[letter[i + 1]];
    if (currentLetter < nextLetter) {
      addedNum -= currentLetter;
    } else {
      addedNum += currentLetter;
    }
  }
  return addedNum;
};
let letter = "LVIII";
console.log(romanInt(letter));
```
### 풀이 방법
 * 라틴문자는 왼쪽에서 오른쪽으로 해석하며, 만약 큰수가 작은수(혹은 같은 수)를 만났을 때 더하고, 자신보다 더 큰
 숫자를 만나면 뺀다. 
 * 예를 들어 I = 1, II = 2, III = 3, I(1)V(5)  1 - 5 = 4, V =5, VI = 6
 * `else` 에 더하기 식을 쓴 이유는 마지막 문자 "I" 는 다음 비교대상 문자가 없기 때문에 `if 조건식`에서 `false` 이다.그러므로, else 조건문에 더하기 식을 작성해야 한다.
> 참조사이트 : https://coding.tools/kr/roman-numerals-to-numbers

---