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

let num = 0;
const fact = num => {
    if (num === 0)
        return 0

    return fact(num - 1) + num
}
console.log(fact(10))