// let x = 201;

// console.log(typeof x);

// x = "Hello World";

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// x = {
//   name: "John Doe",
// };

// console.log(typeof x);

// let username = "John Doe";

// let newUsername = username;

// newUsername = "Jenny Doe";

// console.log(newUsername);
// console.log(username);

// let user = { name: "John" };

// let userTwo = user;

// userTwo.name = "Jenny";

// console.log(user);

// OBJECTS
// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   isAdmin: true,
//   address: {
//     street: "201 Main Road, Wakad",
//     city: "Pune",
//     zip: 792387,
//   },
//   friends: ["Jack", "Jenny", "Jill"],
//   addFriend: function (newFriend) {
//     this.friends.push(newFriend);
//   },
// };

// console.log("Full Name : ", user.firstName, user.lastName);

// user.addFriend("Jenny");

// console.log("My Friends : ", user.friends);

// ARRAYS

// let arr = ["Hello", 32, true, function () {}, {}];

// console.log(arr[1]);

// let marks = [99, 95, 92, 86, 71, 83];
// console.log(marks);
// marks.push(99);
// marks.unshift("99");
// marks.pop();
// marks.shift();
// marks.splice(1, 3);
// marks.reverse();
// marks.sort();
// marks.fill(0, 1, 4);

// let updatedMarks = marks.map(function (value) {
//   return value + 1;
// });

// let updatedMarks = marks.filter(function (mark) {
//   return mark >= 90;
// });

// let updatedMarks = marks.slice(1, 3);

// let updatedMarks = marks.concat([88, 85]);
// console.log(updatedMarks);

// let position = marks.indexOf(71);

// let position = marks.findIndex(function (value) {
//   return value === 92;
// });

// console.log(position);

// let mark = marks.find(function (mark) {
//   return mark < 80;
// });

// console.log(mark);

// Function declaration
// demoFn();

// function demoFn() {
//   console.log("Demo function called");
// }

// Function Expression

// let add = function (n1, n2) {
//   return n1 + n2;
// };

// console.log(add(3, 5)); // ?

// FIRST CLASS CITIZENS

// function test() {
//   return function () {
//     return 12;
//   };
// }

// console.log(test()); // ?

// let nestedFn = test();

// console.log(nestedFn());
// --------

// function greet() {
//   console.log("Hello there!");
// }

// function demo(cb) {
//   cb();
// }

// demo(greet);

function printFilteredValues(filteredValues) {
  console.log(filteredValues);
}

function doSomething(arr, cb) {
  let filteredValues = arr.filter(function (element) {
    return element > 90;
  });
  cb(filteredValues);
}

doSomething([99, 85, 79, 96], printFilteredValues);

// CALLBACK - function supplied as argument
// HigherOrderFunction (HoF) -
// - return the function
// - receive the function as argument
