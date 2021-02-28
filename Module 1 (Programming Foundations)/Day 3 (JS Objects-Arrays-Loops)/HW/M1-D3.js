/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
const numArray = [1,2,3,4,5];

////////////////////////////////////////////

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const user1 = {
    name:"Davide",
    surname:"Pacco",
    emailAddress: "daved.pacco@gmail.com",
    age: 25
}

///////////////////////////////////////////

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
user1["hasDrivingLicense"] = true;


/*if (user.age > 18) {
    console.log("Driving License obtained");
    } else {
        console.log ("Driving License not obtained");
    } 
*/

///////////////////////////////////////////

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
delete user1.age;
console.log (user1);

//////////////////////////////////////////

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */

const user2 = {
    name:"Daniele",
    surname:"San",
    emailAddress: "san.daniele@gmail.com",
    age: 300
}

console.log(user1.emailAddress !== user2.emailAddress);

//////////////////////////////////////////

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

let totalShoppingCart = 60;
if (totalShoppingCart > 50) {
    console.log("Free Shipping Avaible")
} else {
    console.log("Free Shipping not avaible");
    console.log("The total is",totalShoppingCart + 10, "€");
}

//////////////////////////////////////////

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

let totalShoppingCartOffer = totalShoppingCart * 0.20;
console.log ("The total during BlackFriday will be", (totalShoppingCart - totalShoppingCartOffer) + 10,"€");

//////////////////////////////////////////

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */

const Car1 = {
    brand: "Audi",
    model: "A7",
    licensePlate: "AA11"
}
const Car2 = Object.assign({}, Car1)
Car2.licensePlate = "AA12";
const Car3 = Object.assign({}, Car1)
Car3.licensePlate = "AA13";
const Car4 = Object.assign({}, Car1)
Car4.licensePlate = "AA14";
const Car5= Object.assign({}, Car1)
Car5.licensePlate = "AA15";

//////////////////////////////////////////

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
const CarsForRent = [Car1,Car2,Car3,Car4,Car5]

///////////////////////////////////////////

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
CarsForRent.shift();
CarsForRent.pop();

//////////////////////////////////////////

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
delete Car3.model;
console.log(Car3);

//////////////////////////////////////////

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
const CarsForSale = [Car1,Car3,Car5];
let total = CarsForSale.length + CarsForRent.length;

//////////////////////////////////////////

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
for(let i = 0; i < CarsForSale.length; i++){

    console.log( i + 1 + "# Car") 
    console.log("Brand: ", CarsForSale[i].brand)
    console.log("Model: ", CarsForSale[i].model)
    console.log("License Plate: ", CarsForSale[i].licensePlate)

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT */ }
