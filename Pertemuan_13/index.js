//Rest Parameter dan Spread Operator

//1. Rest Parameter

//tanpa rest parameter
// const func1 = (param1, param2, param3, param4, param5) => {
//     console.log(param1, param2, param3, param4, param5);
// };

// func1("A", "B", "C", "D", "E");

// //dengan rest parameter
// const func2 = (...params) => {
// };

// func2("A", "B", "C", "D", "E", "F", "G");

// //rest parameter harus berada di terakhir dalam parameter
// const func3 = (param1, param2, ...params) => {
//     console.log(param1, param2);
//     console.log(param1, param2);
//     console.log(params);
// };
// func3("A", "B", "C", "D", "E");

// //mini exercise
// const penjumlahan = (...arr) => {
//     let hasil = 0;
//     arr.forEach((item) => (hasil += item));
// };

// console.log(penjumlahan(1, 2, 3, 4, 5, 6));

// //Spread Operator
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);

//Array
//1. Duplikasi Array
// let numbers2 = [...numbers];
// numbers.push(6);
// console.log(numbers);
// console.log(numbers2);
