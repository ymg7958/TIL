//
//
// const abs_num = (n) => {
//     if (n >= 0) {
//         return n
//     } else {
//         return -n
//     }
// }
//
// const abs_square = (m) => {
//     let b = m * m
//     return Math.sqrt(b);
// }
//
// console.log(abs_num(5))
// console.log(abs_num(-5))
// console.log(abs_square(5))
// console.log(abs_square(-5))

//
// let sum = 0;
// for ( let i = 1; i <= 100; i++) {
//     sum += i
// }
//     console.log(sum)

// 연속된 합을 구하는 알고리즘
// function sum_n(n) {
//     return n * (n + 1) / 2
// }
//
// console.log(sum_n(10)) // 55
// console.log(sum_n(100)) // 5050
//
// const arr = [17,92,18,33,58,7,33,42]
//
// function max(a) {
// let num = arr[0]
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num)
//         num = arr[i]
// }
//     return num;
//
//
// }
// console.log(max(arr))

// const name = ["Tom","Jerry","Mike","Tom", "Yun"]
// let arr = []
// const findName = (a) => {
//     for (let i = 0; i < name.length -1; i++) {
//         for (let j = i + 1; j < name.length; j++) {
//             if (a[i] === a[j]) {
//                 arr.push(a[i])
//             }
//         }
//     }
//     return arr
// }
// console.log(findName(name))

//
// function fact(n) {
//     let f = 1;
//     for (let i = 1; i < n; i++) {
//         f += f * i;
//     }
//     return f
// }
//
// console.log(fact(1))
// console.log(fact(5))

//
// const factrorial = (num) => {
//     if ( num < 1) {
//         return 1
//     }
//     return num * (factrorial(num - 1))
// }
// console.log(factrorial(1))
// console.log(factrorial(2))
// console.log(factrorial(3))
//
// let num = 0;
// const fact = num => {
//     if (num === 0)
//         return 0
//
//     return fact(num - 1) + num
// }
// console.log(fact(10))
//
// function gcd(a,b) {
//     let i = Math.min(a,b)
//     while (true) {
//         if (a % i === 0 && b % i === 0) {
//             return i;
//         }
//         i = i -1;
//     }
// }
//
// console.log(gcd(1,5))
// console.log(gcd(60,24))

//
// const gcd = (a,b) => {
//     if (b ===0) return a;
//
//     return gcd(b, a%b)
// }
// console.log(gcd(60,24))

//
// const fibonacci = (num) => {
//     if (num <= 1) return 1;
//
//     return fibonacci(num - 1) + fibonacci(num - 2);
// };
//
// for (let i = 1; i < 10; i += 1) {
//     console.log(fibonacci(i));
//
// const search_list = (a, x) => {
//     let length = a.length;
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         if ( x === a[i]) {
//             result.push(i)
//         }
//     }
//         return result
// }
// const arr = [17,92,18,33,58,7,33,42, 7, 1,2,4,6,7,4,7]
// console.log(search_list(arr, 7))
//
// let arr = [1,4,9,16,25,36,49,64,81]
// function binarySearch (target, dataArray) {
//     let low = 0;
//     let high = dataArray.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((high + low) / 2);
//         let guess = dataArray[mid];
//         if (guess === target) {
//             return guess;
//         } else if (guess > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return undefined;
// }
// console.log(binarySearch(36, arr))



const bubbleSort = (arr) => {
    let swapped = true;
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
};
const a = [5, 2, 6, 3, 1, 4, 9, 8, 7];
console.log(bubbleSort(a));
