let arr = ["a", "b", "c", "d", "e"];

/***** SLICE METHOD *****/

// This will give us a new array and won't affect the original
// It won't include the end parameter
console.log(arr.slice(3));
console.log(arr.slice(0, 3));
console.log(arr.slice(-2));
console.log(arr.slice(-2));

// both ways can be created to use the shallow copy of the orignal array,just that slice method is given preference when we have to chain the method
console.log(arr.slice());
console.log([...arr]);

/***** SPLICE *****/

// This will work same as slice only difference is that it will affect the original.
// Use case : Use to delete the multiple item from the array.
// Mostly use to delete the last element from the array.

console.log("********* SPLICE **************");
console.log(arr.splice(3));
console.log(arr.splice(0, 3));
console.log(arr.splice(-1));

/***** REVERSE *****/

// This also change the original array

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

/***** CONCAT *****/

// This will not mutate the original array

console.log("********** CONCAT *************");
console.log(arr.concat(arr2));
console.log(arr.concat([...arr, ...arr2]));

/***** JOIN *****/

// This will not mutate the original array

console.log("********** JOIN *************");
console.log(arr2.join("-"));

/***** NEW AT METHOD *****/

// This will not mutate the original array

const arrDummy = [23, 11, 64];
console.log(arrDummy[0]);
console.log(arrDummy.at(0));

console.log(arrDummy[arrDummy.length - 1]);
console.log(arrDummy.slice(-1)[0]);
console.log(arrDummy.at(-1));
