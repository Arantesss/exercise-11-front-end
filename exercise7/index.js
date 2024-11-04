// 1. DESTRUCTURING ARRAY
// let myArray = [1, 2, 3];

// const [buah, sayur, kacang_kacangan] = myArray;

// console.log(buah); // 1
// console.log(sayur); // 2
// console.log(kacang_kacangan); // 3

// // 2. DESTRUCTURING OBJECT
// const person = {
//     name: "Bonito",
//     age: 21,
//     city: "Manado"
// };

// const { name, age, city } = person;

// console.log(name); 
// console.log(age); 
// console.log(city);

//3. DESTRUCTURING DEFAULT VALUE ARRAY
// let myArray = [1];

// const [a, b = 2] = myArray;

// console.log(a); // 1 (nilai dari array)
// console.log(b); // 2 (default value, karena elemen kedua tidak ada)

// //4. DESTRUCTURING DEFAULT VALUE OBJECT
// let person = {
//     name: "Bonito",
//     age: 21
// };

// const { name, age, city = "Manado" } = person;

// console.log(name); // Bonito
// console.log(age);  // 21
// console.log(city); // Manado (default value karena 'city' tidak ada dalam objek)

// 5.  Rest operator pada objek di dalam array
const people = [
    { name: "Michelle", age: 25, city: "Tomohon" },
    { name: "Bonito", age: 21, city: "Manado" }
];

const [{ name, ...details }, secondPerson] = people;

console.log(name);        // Michelle
console.log(details);     // { age: 25, city: "Tomohon" }
console.log(secondPerson);// { name: "Bonito", age: 21, city: "Manado" }

