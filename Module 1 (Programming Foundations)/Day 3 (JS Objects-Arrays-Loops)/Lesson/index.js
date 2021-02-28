// LET VS CONST

// let myVar = 0
// const myVar2 = 0

// TERNARY OPERATOR

// const age = 19;

// const price = age > 18 ? "20$" : "15$";

// console.log(price);

// TRUTHY AND FALSY

// const truthyOrFalse = "" ? "truthy" : "falsy";

// console.log(truthyOrFalse);

// undefined, null, 0, "", NaN -----> FALSY VALUES

// DOUBLE EQUALITY VS TRIPLE EQUALITY

//console.log(2 === "2");

//********* OBJECTS ****************

// const user = {
//   name: "John",
//   surname: "Rambo",
//   age: 18,
//   isStudent: true,
//   "is Student": true,
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name); // user["name"]
// console.log(user["name"]);
// console.log(user["is Student"]);

// if (user.birthDate) {
//   console.log(user.birthDate);
// } else {
//   console.log("Birthdate does not exists!");
// }

// let user2 = {
//   name: "John", // propertyName: value
//   surname: "Rambo",
//   age: 18,
//   isStudent: true,
//   "is Student": true,
// };

// user2 = {};

// user.name = "Riccardo";

// console.log(user.name + " " + user2.name);

// const user = {
//   name: "John",
//   surname: "Rambo",
//   age: 18,
//   isStudent: true,
//   "is Student": true,
// };

// CLONING OBJECTS
// const user2 = user; // DO NOT DO THIS TO CLONE OBJECTS
// Object.assign(user2, user); // DO THIS

// DELETING PROPERTIES

// delete user.name;

// console.log(user);

// user.name = "George";

// console.log(user);

// *************** ARRAYS *******************

// const myArray = [10, 20, 30, 40, 50, 60, 70, 80]; // every element has its own INDEX (first position === 0, second position=== 1, last position === 7)

// console.log(myArray[0]); // to access an element I need to use --> nameOfTheArray[index]
// console.log(myArray[6]);
// console.log(myArray[8]); // index 8 is out of the bounds --> undefined!!!

// const arrayOfStrings = ["Hello", "Strivers", "!"];

// console.log(arrayOfStrings[arrayOfStrings.length - 1]);

// console.log(myArray.length);

// ARRAY OF OBJECTS

// const users = [
//   {
//     name: "John",
//     surname: "Rambo",
//   },
//   {
//     name: "Arnold",
//     surname: "Schwarzenegger",
//   },
//   {
//     name: "Jean Claude",
//     surname: "VanDamme",
//   },
// ];

// console.log(users[1].surname);

// ARRAYS USEFUL METHODS

// const myArray = [1, 2, 3, 2, 2, 2];

// myArray.push(4);

// console.log(myArray);

// const lastElement = myArray.pop();

// console.log(myArray);
// console.log(lastElement);

// console.log(myArray.indexOf(2));
// console.log(myArray.lastIndexOf(2));

// const slicedArray = myArray.slice(2, 4);

// console.log(slicedArray);
// console.log(myArray);

// console.log(myArray.concat([7, 8, 9]));

// const myArray2 = [7, 21123, 5324324, 63634634];

// console.log(myArray.concat(myArray2));

// const index = 2;
// const myArray = ["a", "b", "c", "d", "e"];

// //console.log(myArray.slice(0, index).concat(myArray.slice(index + 1)));

// const firstPart = myArray.slice(0, index);
// console.log(firstPart);
// const secondPart = myArray.slice(index + 1);
// console.log(secondPart);

// const concatenatedArray = firstPart.concat(secondPart);
// console.log(concatenatedArray);

// ****************** LOOPS *******************

// FOR LOOP

// for (let i = 0; i <= 5; i++) {
//   // < =
//   // (declaring and initializing a variable; condition; increment by one the variable)
//   console.log(i); // first iteration --> i = 0, second iteration --> i= 1
//   console.log("next");
// }

// const myArray = [6, 546123, 123, 1313, 6565, 2, 12433];

// for (let index = 0; index < myArray.length; index = index + 1) {
//   // iterating element by element starting from myArray[0] to myArray[6]
//   // condition --> till i LOWER THAN 7
//   console.log("Hey I'm printing element with index: ", index);
//   console.log("Here is the element --> ", myArray[index]);
//   if (myArray[index] === 123) {
//     break;
//   }
// }

// for (let element of myArray) {
//   console.log(element);
// }

//////////////
