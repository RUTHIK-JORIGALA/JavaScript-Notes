// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
  // myObject.greet();


// -- JSON - Javascript Object Notation

const data = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]


// --   parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
// -- stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.
  
//   let myObj = { name: "Chris", age: 38 };
// console.log(myObj);
// let myString = JSON.stringify(myObj);

// console.log(myString);
// console.log(JSON.parse(myString));

// -- Promises


// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//       doThirdThing(newResult, function (finalResult) {
//         console.log(`Got the final result: ${finalResult}`);
//       }, failureCallback);
//     }, failureCallback);
//   }, failureCallback);


// --   using then neat code
// -- In then we must return something to the next iteration.

  // doSomething()
  // .then(function (result) {
  //   return doSomethingElse(result);
  // })
  // .then(function (newResult) {
  //   return doThirdThing(newResult);
  // })
  // .then(function (finalResult) {
  //   console.log(`Got the final result: ${finalResult}`);
  // })
  // .catch(failureCallback);

// -- Examples from docs

  // doSomething()
  //   .then((url) => fetch(url))
  //   .then((res) => res.json())
  //   .then((data) => {
  //     listOfIngredients.push(data);
  //   })
  //   .then(() => {
  //     console.log(listOfIngredients);
  //   });

// --   Using async/await

  // async function logIngredients() {
  //   const url = await doSomething();
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   listOfIngredients.push(data);
  //   console.log(listOfIngredients);
  // }