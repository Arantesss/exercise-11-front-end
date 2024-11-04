//IIFE & CALL Back

//1. IIPE()

//Tidak pakai parameter & aargument & return value
// (function () {
//   console.log("Hello World");
// })();

// //with parameter & argument
// (function (fullName) {
//   console.log("Hello World" + fullName);
// })("Jhon Doe");

// //with parameter & argument & return value
// let output(function (fullName) {
//     console.log("Hello World" + fullName);
//   })("Jhon Doe");

//   console.log(output);

//   //Call Back funtion
//   //No params & argument & return value
//   function sayHello(callback){
//     //logic
//     callback();
//   }

// sayHello(function () {
//     console.log("Hello callback funtion")
// });

//with params & argument & return value
function sayHello(callback) {
  //logic
  let output = callback("Jhon Doe");
  return output;
}

sayHello(function (fullName) {
  return "hello" + fullName;
});

console.log(output);
