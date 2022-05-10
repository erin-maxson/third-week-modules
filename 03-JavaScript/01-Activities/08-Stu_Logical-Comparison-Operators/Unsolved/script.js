var a = "50";
var b = 50;
var c = 100;
var d = c % b; // 100 / 50 = 0// -- is it divisible? if yes, 0. if not, no.
var e = c / 2;

// 50 = 100/50 //
var expression1 = (b === e); // 50 === (100/2) = 50, TRUE //
// 2 < 2 //
var expression2 = (e > d); // 50 = 100/50 = 0 // FALSE -- TRUE with flip of the sign

// // Use comparison operators so all expressions below log to the console as true
// // "50" = 50
// console.log(a == b);
// // 50 = 100/2 //
// console.log(b == e);
// // 100 > 50 //
// console.log(c > b);
// // 100/50 == 50 //
// console.log(d === 50);

console.log(a !==b);
console.log(b === e);
console.log(c > b);
console.log (d ===50);

// // Use logical operators so all expressions below log to the console as true
// console.log( true && true);
// console.log( !false || false);

console.log( expression1 && expression2);
console.log( !expression1 || expression2);