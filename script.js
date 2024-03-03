console.log("Hello")

// -- var 
// -- function-scoped or globally scoped
// -- Variables declared with var are hoisted to the top of their function.
// -- You can redeclare and reassign values to a variable declared with var.

// function example() {
//     var x = 10;
//     if (true) {
//         var x = 20; // This reassigns the value of the variable x declared in the outer scope
//         console.log(x); // Output: 20
//     }
//     console.log(x); // Output: 20
// }
// example();

// -- let

// -- let is block-scoped, meaning it is accessible only within the block in which it is defined.
// -- Accessing the variable before the initialization will result in a ReferenceError.
// -- You can reassign values to a variable declared with let, but you cannot redeclare it in the same block.

function example() {
    let x = 10;
    if (true) {
        let x = 20; // This declares a separate variable x local to this block
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}
// example();

// -- const
// -- const also creates block-scoped variables.
// -- Variables declared with const must be initialized during declaration and cannot be reassigned.
// -- However, for objects and arrays declared with const, their properties or elements can still be mutated.


// -- Data types

// --primitive

// -- Number

let num = 42;
let floatNum = 3.14;

// -- String

let strSingle = 'Hello, World!';
let strDouble = "JavaScript";

// -- Boolean


let isTrue = true;
let isFalse = false;

// -- undefined
// -- When value is not privided or any value is not accessable

let uninitializedVar;
let undefinedValue = undefined;

// -- null

let nullValue = null;

// -- Symbol

// -- Creating a symbol
const MY_KEY = Symbol();

// -- Creating an object with a symbol property
let obj = {};
obj[MY_KEY] = 'value';

// -- Accessing the symbol property
// -- console.log(obj[MY_KEY]); // Output: 'value'

// -- Non-premitive

// -- Object 

let person = {
    name: 'John',
    age: 30,
    isStudent: false
};

// -- Array

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// -- Function

function add(a, b) {
    return a + b;
}

// -- BigInt
// -- suffix n
const bigIntValue = 9007199254740991n;

// -- NaN - Not a number

let result = 'hello' / 5;



