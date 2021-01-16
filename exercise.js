// Given this function:
function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
		return num % 2 === 0;
	});
}

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

function filterOutOdds(...args) {
	return args.filter((num) => num % 2 === 0);
}
console.log(filterOutOdds(1, 3, 2, 4, 5, 6, 7, 8));

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...args) => args.reduce((min, next) => (next < min ? next : min));

console.log(findMin(1, 4, 12, -3)); // -3
console.log(findMin(1, -1)); // -1
console.log(findMin(3, 1)); // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (object1, object2) => {
	return { ...object1, ...object2 };
};

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...rest) => [ ...arr, ...rest.map((val) => val * 2) ];

console.log(doubleAndReturnArgs([ 1, 2, 3 ], 4, 4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([ 2 ], 10, 4)); // [2, 20, 8]

// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
	const newList = [ ...items ];
	newList.splice(Math.floor(Math.random() * newList.length), 1);
	return newList;
}

console.log(removeRandom([ 1, 2, 3, 4, 5, 6, 7, 8 ]));

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
	return [ ...array1, ...array2 ];
}
console.log(extend([ 1, 2, 3 ], [ 4, 2, 1 ]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key1, val) {
	newObj = {};
	newObj[key1] = val;
	return { ...obj, ...newObj };
}
console.log(addKeyVal({ 1: 'a', 2: 'b' }, 3, 'c'));

/** Return a new object with a key removed. */

function removeKey(obj, key) {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
}
console.log(removeKey({ '1': 'a', '2': 'b' }, '2'));

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
	return { ...obj1, ...obj2 };
}
console.log(combine({ '1': 'a' }, { '2': 'f' }));

/** Return a new object with a modified key and value. */
function update(obj, key, val) {
	const next = {};
	next[key] = val;
	return { ...obj, ...next };
}
console.log(update({ 1: 'a', 2: 'b' }, 2, 'c'));
