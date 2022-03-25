// // //2-ci sual
// let y = prompt();
// if (y * 1 == y) {
//     alert("Daxil etdiyin deyer reqemdir");
// } else if (typeof(y) == 'string') {
//     alert("Daxil etdiyiniz deyer metndir");
// }


// // //1-ci sual
// let a = prompt();
// let b = prompt();
// let c = prompt();
// if (c - b >= 0 && c - a >= 0) {
//     if (c - b > c - a) {
//         alert(a);
//     } else {
//         alert(b);
//     }
// } else if (c - b <= 0 && c - a <= 0) {
//     if (c - b > c - a) {
//         alert(b);

//     } else {
//         alert(a);
//     }
// }

// //3-cu sual
// let x = prompt();

// if (x > 0 && x < 10) {

//     alert(x);
// } else
// if (x >= 10 && x < 100) {
//     alert(x / 10, x % 10);
// } else if (x >= 100 && x < 1000) {
//     alert(x / 100, x % 100, x % 10);

// }
// //4-cu sual


// let a = 4;
// let b = 7;
// let c = 2;
// if (a <= b && b <= c) {
//     console.log(a, b, c);
// } else if (a <= c && c <= b) {
//     console.log(a, c, b);
// } else if (b <= a && a <= c) {
//     console.log(b, a, c);
// } else if (b <= c && c <= a) {
//     console.log(b, c, a);
// } else if (c <= a && a <= b) {
//     console.log(c, a, b);
// } else if (c <= b && b <= a) {
//     console.log(c, b, a);
// }
const nums = [4, 2, 7];

console.log(nums.sort());