## 시간복잡도
  * 표기 : `Big-O` 
  * 입력 값 변화에 따라 연산할 때 `연산횟수에 비해 걸리는 시간`
  
[예제]
  * O(1)
    + 입력값이 증가해도 시간이 늘어나지 않는 경우
    + 배열이 길이가 길어도 해당하는 인덱스에 접근하는 시간은 동일
  * O(n)
    + 입력값에 따라 시간이 같은 비율로 증가
    + 입력값이 1일때 1초의 시간이 걸리면, 입력 값이 100이면 100초의 시간 소요
  * O (log n)
    + 입력값에 따라 log n 만큼 시간이 증가하는 경우
  
### 버블정렬 (bubble sort)
  * O(n^2) 알고리즘은 n번의 라운드를 이루어져 있으며, 라운드 마다 배열 원소를 한번씩 쭉 살펴보다.
  * 순서가 잘못된 경우 Swap 한다.
  
```javascript
for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < n.length -1; j++) {
    if (n[j] > n[j+1]) {
      let tmp = n[j];
          n[j] = n[j + 1];
          n[j + 1] = tmp;
```

#### 역위 (inversion)
  * 정렬 알고리즘 분석시 유용한 개념. 배열 인덱스 조합이 a < b 이지만 array[a] > array[b]인 경우 순서가 잘못되었을 때 이를 역위라 한다.
  * 즉 역위의 개수 = 필요한 작업량
  * 역위가 최대갯수인 경우의 식
```javascript
1 + 2 ...+ (n - 1) = n(n - 1) / 2 = O(n2);
```

### 병합정렬(merge sort)

* 병합정렬은 Linked List의 정렬이 필요할 때 유용.
* LinkedList는 삽입 및 삭제 연산에 유용, 접근 연산에 유용하지 않음. 
* 배열은 인덱스를 통해 접근하기 때문에 시간복잡도가 O(1)이지만, LinkedList는 Head 부터 탐색해야 하기 때문에 시간 복잡도가 O(n)이다.임의적인 접근에서는 오버헤드가 증가. 
* Linked List는 순차적인 접근과 같은 병합정렬을 사용하는 것이 유용.

![merge_ani](./images/mergesort_ani.gif)
> 출처 visualgo.net/sorting
-------
[Example 01]
```javascript
const merge = function (left, right) { // 정렬된 왼쪽과 오른쪽 배열을 받아서 하나로 합치는 순수한 함수
	const result = [];
	while (left.length !== 0 && right.length !== 0) {
		left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());	
	}

	return [...result, ...left, ...right]; 
  // left,right 둘 중 하나는 요소가 남아있기 때문에 result 뒤에 붙여서 출력
}

const mergeSort = function (array) {
	// ending condition: length === 1 인 배열이 들어올 때, 정렬이 끝난 것. 
	if (array.length === 1) return array; //그 배열 그대로 리턴...! 정렬할 필요가 없으므로

	// 2로 나누고 '내림을' 해야
	// length 가 2일 때도 안전하게 배열을 slice 할 수 있다.
	const middleIndex = Math.floor(array.length / 2); 
	const left = array.slice(0, middleIndex);
	const right = array.slice(middleIndex);

	// 재귀로 계속해서 반으로 나누면서 length 가 1이 될때까지 쪼개고, 
	// 거꾸로 올라오면서 순수한 함수인 merge에 인자로 넣어서 다시 병합되어서 최종값을 리턴한다.
	return merge(mergeSort(left), mergeSort(right));
}
```
----------
[Example 02]
```javascript
var mergeSort = function (array) {
  if (array.length < 2) return array; // 원소가 하나일 때는 그대로 내보냅니다.
  var pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
  var left = array.slice(0, pivot); // 쪼갠 왼쪽
  var right = array.slice(pivot, array.length); // 쪼갠 오른쪽
  return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
};
function merge(left, right) {
  var result = [];
  console.log("-------------------------");
  left.forEach((e) => console.log("left" + e));
  right.forEach((e) => console.log("right" + e));
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // 두 배열의 첫 원소를 비교하여
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); // 오른쪽도 마찬가지
    }
  }
  while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
  while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
  result.forEach((e) => console.log("result" + e));
  return result;
}

let answer = mergeSort([5, 2, 4, 7, 6, 1, 3, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(answer);

```