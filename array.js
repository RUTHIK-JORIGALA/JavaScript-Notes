// const arr = [1, 2, 3,5,3];
// const arr1 = [4, 5, 6];
// const arr2 = [10, 11, 12];
// console.log(arr);

// -- array methods

// -- push(): Adds one or more elements to the end of an array and returns the new length of the array.
// arr.push("Kodhati")

// -- pop(): Removes the last element from an array and returns that element.
// arr.pop();

// -- shift(): Removes the first element from an array and returns that element, shifting all subsequent elements to a lower index.
// arr.shift();

// -- unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// arr.unshift("Indhu");

// -- concat(): Combines two or more arrays and returns a new array.
    // const arrayConcat = arr1.concat(arr2);
    // console.log(arrayConcat);

// -- splice(): Adds or removes elements from an array at a specified index.
// -- syntax arr.splice(start,end, replacing values)
// arr.splice(0,3, 10,20); 

// console.log(arr);

// -- slice(): Returns a shallow copy of a portion of an array into a new array.
// let newArr = arr.slice(2, 4);
// console.log(newArr); 

// -- indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log(arr.indexOf(3));

// -- lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// console.log(arr.lastIndexOf(3)); 

// -- forEach(): Executes a provided function once for each array element.
// arr.forEach(element => console.log(element));

// -- map(): Creates a new array with the results of calling a provided function on every element in the calling array.
// let newArr = arr.map(element => element * 2);
// console.log(newArr);

// -- filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// let newArr = arr.filter(element => element % 2 === 0);
// console.log(newArr);

// -- reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// const initialValue = 0
// let sum = arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue),initialValue);
// console.log(sum);

// -- reduceRight(): Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// let arr = ['a', 'b', 'c'];
// let concatString = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
// console.log(concatString); 

// -- find(): Returns the first element in the array that satisfies the provided testing function.
// let foundElement = arr.find(element => element >= 3);
// console.log(foundElement);

// -- findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
// let foundIndex = arr.findIndex(element => element >= 3);
// console.log(foundIndex);

// -- every(): Tests whether all elements in the array pass the provided function.
// let allEven = arr.every(element => element % 2 === 0);
// console.log(allEven); 

// -- some(): Tests whether at least one element in the array passes the provided function.
// let hasEven = arr.some(element => element % 2 === 0);
// console.log(hasEven);

// -- includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3)); 

// -- sort(): Sorts the elements of an array in place and returns the sorted array.
// arr.sort();

// -- reverse(): Reverses the elements of an array in place.
// arr.reverse();

// -- join(): Joins all elements of an array into a string.
// let joinedString = arr.join(' ');
// console.log(joinedString);

// -- toString(): Returns a string representing the specified array and its elements.
// let str = arr.toString();
// console.log(str);

// -- isArray(): Determines whether the passed value is an Array.
// console.log(Array.isArray([1, 2, 3])); 
// console.log(Array.isArray('Hello'));

// -- flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let arr22 = [1, 2, [3, 4, [5, 6]]];
// let flatArr = arr22.flat(2);
// console.log(flatArr);

// -- flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
// let arr = [1, 2, [3, 4]];
// let mappedArr = arr.flatMap(x => [x, x * 2]);
// console.log(mappedArr);



// console.log(arr);