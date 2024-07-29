// ARROW FUNCTION

// function add(n1, n2) {
//     return n1 + n2;
// }

// let sum = function (n1, n2) {
//     return n1 + n2;
// }

// let sum = (n1, n2) => n1 + n2

// let sum = (n1, n2) => {
//   console.log(n1, n2);
//   return n1 + n2;
// };

// console.log("Sum : ", sum(2, 3));
// -------
// DESTRUCTURING : unpacking the collection (Object / Array)

// let friends = ["Monica", "Joe", "Chandler", "Ross"];

// let [f1, f2] = friends;

// console.log(f2);

// let user = {
//   email: "monica@test.com",
//   age: 21,
// };

// let { email } = user;

// console.log(email);

// ---------
// REST / SPREAD (...)
// REST : creates the Array collection
// - last argument in function definition

// function mystry(english, ...args) {
//   console.log(args[0]); // []
// }

// mystry("12", "34", "56", "78");
// mystry("12", "34", "56");
// mystry("12", "34");

// SPREAD : expands the collection
// - Can be applied on both - object and array

// let arr = [3, 4, 5];
// let marks = [6, 7, 8, ...arr];

// console.log(marks); // [6,7,8 [ 3,4,5 ] ]

// let userOne = {
//   email: "john@test.com",
//   company: "DB",
// };

// let userTwo = {
//   ...userOne,           // {email, company}
//   email: "jenny@test.com",
// };

// console.log(userTwo);
// ---------

// Template Literals
// " " | ' ' | ` ` (Back-tick)
// - Embed variables within string without ( + )
// - Multiline string without ( \n )

// let username = "John Doe";
// let userAge = 23;

// let greet = `Hello from ${username}!

// I'm ${userAge} years old.

// `;

// console.log(greet);
// --------

// BLOCK SCOPING - restrict the scope of variable to nearest block
// let: other types of variables
// const: create constants

// const LOADING = "LOADING...";
// LOADING = "DISPALYING...";       // ERROR - Assignment to constant variable.

// function demoFn(arr) {
//   if (arr.length > 2) {
//     console.log(LOADING); // ERROR -ReferenceError: LOADING is not defined
//   } else {
//     let LOADING = "LOADING....";
//   }
// }

// demoFn([2, 3, 4, 45]);

// ---------

// MAP : key-value pair
// let map = new Map();

// map.set("name", "John");
// map.set("age", 21);

// for (let el of map.keys()) {
//   console.log(el);
// }
// for (let el of map.values()) {
//   console.log(el);
// }

// console.log(map);

// SET : unique value; No duplicates
// let set = new Set();

// set.add("John");
// set.add("Jenny");
// set.add("Jack");
// set.add("Jill");
// set.add("Jill");

// console.log(set);

// -------
// CLASS
// class Animal {
//   constructor(species, legs) {
//     this.species = species;
//     this.legs = legs;
//   }

//   getDetails() {
//     return `Hey ${this.species} have ${this.legs} legs!`;
//   }
// }

// let bunny = new Animal("Rabbit", 4);
// console.log(bunny.getDetails());

// let shera = new Animal("Tiger", 4);
// console.log(shera.getDetails());

// -------
// DEFAULT PARAMETER

// function demoFn(arr = []) {
//   return arr.length;
// }

// console.log(demoFn());
// console.log(demoFn([2, 3, 4, 5]));

// --------
// PROMISE : placeholder for future value
// Promise States
// - Pending
// - Settled (Resolve, Reject)

// - Producer Code

// function promiseProducer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve({ message: "Success" });
//       reject(new Error("Something went wrong"));
//     }, 2000);
//   });
// }

// - Consumer Code
// > Async...await
// async function consumePromise() {
//   try {
//     let response = await promiseProducer();
//     console.log("ASYNC RESPONSE : ", response);
//   } catch (err) {
//     console.error(err);
//   }
// }
// consumePromise();

// > .then().catch()
// function consumePromise() {
//   console.log("Start");
//   promiseProducer()
//     .then((response) => console.log("RESPONSE : ", response))
//     .catch((err) => console.log(err));

//   console.log("End");
// }

// consumePromise();

// GET CALL
// async function fetchTodos() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   let result = await response.json();
//   console.log("RESULT : ", result);
// }

// fetchTodos();

// POST CALL SYNTAX
// fetch("", {
//   method: "POST",
//   body: {},
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization" : "Bearer token"
//   },

// })
