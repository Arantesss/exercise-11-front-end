//cara 1
function greetings1() {
  console.log("Hello world");
}
greetings1(); //call function

//cara 2
let greetings2 = function () {
  console.log("Hello world");
};
greetings2(); //call funtion

//cara 1
function greetings1(fullName) {
  return "hello" + fullName;
}

//                      Argument
let output = greetings1("jhon Doe");
console.log(output);
