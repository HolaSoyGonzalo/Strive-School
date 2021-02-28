// SWITCH CASE

// if (x === "value1") {
//     //do something
// } else if (x === "value2") {
//     // do something else
// } else if(x === "value3"){

// } else {
//     // something not covered by previous conditions
// }

// const i =
//   "input from an external client (something that you don't know when you are developing";

// switch (i) {
//   case 0:
//     console.log("ERROR WE DON'T WANT ZEROS");
//     // send a response to the client
//     break;
//   case 1:
//     console.log("I is one");
//     break;
//   case 2:
//     console.log("I is two");
//     break;
//   case 3:
//     console.log("I is three");
//     break;
//   case 4:
//     console.log("I is four");
//     break;
//   case 5:
//     console.log("I is five");
//     break;
//   case 6:
//     console.log("I is six");
//     break;
//   default:
//     console.log("I is something else");
//     break;
// }

// if (i === 0) {
// } else if (i === 1) {
// } else if (i === 2) {
// }

// ******************* STRINGS *********************

// const singleQuoted = 'asdjwoejqowej'
const example = 123123;
const doubleQuoted = "oj1oij23o1j23oj" + example + "12312";

const templateLiterals = `Valuee of example variable is: ${example} 

Value of doubleQuoted variable is: ${doubleQuoted}
`;

// console.log(templateLiterals.toLowerCase());

// console.log(templateLiterals.slice(4, 10));

// console.log(templateLiterals.indexOf("e"));
// console.log(templateLiterals.indexOf("ee"));
const arrayOfWords = templateLiterals.split(" ");

console.log(arrayOfWords);

const joinedWithDots = arrayOfWords.join("............");

console.log(joinedWithDots);

console.log("HI".repeat(3));

// ****************** FUNCTIONS ************************

// DECLARING A FUNCTION
// let result = 0;

// const square = function (x) {
//   console.log(typeof x);
//   // function(parameter)
//   // BODY OF THE FUNCTION

//   result = x + x * 2;
//   return result;

//   // END OF BODY
// };

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(result);

// const bark = function () {
//   console.log("BARK!");
// };

// console.log("The result of 4*4 is: " + square(4));
// console.log(square(6));

// const squareOf25 = square("asdasd");

// let myFunction = function () {
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
//   console.log("Hello");
// };

// // // myFunction = function () {}; // If function is a let I can overwrite it!
// // console.log(squareOf25);
// myFunction();
//console.log();

// const one = function () {
//   let a = 0;

//   function two() {
//     a = 10;
//     return a;
//   }

//   two();

//   return a;
// };

// console.log(one());

// if(true){
//     const whatever = 0
// } else {

// }

// ARROW FUNCTIONS

const sum = function (a, b) {
  return a + b;
};

const sum2 = (a, b) => {
  // NORMAL ARROW FUNCTION
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  return a + b;
};

const sum3 = (a, b) => a + b; // SHORTER SYNTAX
const square = (x) => x * x;
