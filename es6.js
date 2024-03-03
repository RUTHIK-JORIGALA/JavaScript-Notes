// -- Arrow Functions:

// -- Problem: Verbose syntax for defining functions, especially for simple ones.
// -- Traditional function expression

// let add = function(a, b) {
//     return a + b;
// };

// -- Solution: Arrow functions provide a concise syntax.
// let add = (a, b) => a + b;


//-- Declarations

// -- Problem: var has function scope and can lead to variable hoisting and global scope pollution.
// var x = 10;

// -- Solution: let and const introduce block scope.
// let x = 10;
// const PI = 3.14;


// -- Template Literals:

// -- Problem: Concatenating strings with variables is cumbersome.
// const name = "Indhu";
// const college =" Indhu";
// console.log('Hello, ' + name + ":"+ college + '!');

// -- Solution: Template literals provide a cleaner syntax for string interpolation.
// console.log(`Hello, ${name} : ${college}!`);


// -- Destructuring Assignment:

// -- Problem: Extracting values from arrays or objects requires verbose code.
// let first = arr[0];
// let second = arr[1];

// -- Solution: Destructuring assignment provides a more concise syntax.
// let [first, second] = arr;

// -- Default Parameters:

// -- Problem: Handling default parameter values requires extra code.
// function greet(name) {
//     name = name || 'World';
//     console.log('Hello, ' + name + '!');
// }

// -- Solution: Default parameters provide a cleaner syntax.
// function greet(name = 'World') {
//     console.log(`Hello, ${name}!`);
// }


// -- Spread Operator:

// -- Problem: Concatenating arrays or objects is tedious.
// let newArr = arr1.concat(arr2);

// -- Solution: The spread operator simplifies array concatenation.
// let newArr = [...arr1, ...arr2];


// -- Rest Parameters:

// -- Problem: Handling variable-length argument lists is complex.
// const argume = [1,2,3,4]
// function sum() {
//     let first = arguments[0];
//     let args = Array.prototype.slice.call(arguments);
//     return args.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1,2,3,4));

// -- Solution: Rest parameters simplify handling of variable-length argument lists.

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }


// -- Promises:

// -- Problem: Callback hell makes asynchronous code difficult to read and maintain.

// fetchData(function(data) {
//     processData(data, function(result) {
//         displayResult(result, function() {
//             // More nested callbacks...
//         });
//     });
// });

// -- Solution: Promises provide a cleaner and more structured way to work with asynchronous operations.

// fetchData()
//     .then(processData)
//     .then(displayResult)
//     .catch(handleError);




