//arrays 
/*
let myarray = [1,2,3,4,5];
const heroes = ["yuvi","yuvansh","vansh"]
console.log(array2);
//can also be indexed starting from 0 
console.log(array2[2]);
*/
//array methods 
const array2 = new Array(1,2,3,4);

console.log(array2.push(4));        // add 4 to the end and print new length
console.log(array2.pop());          // remove and print last element
console.log(array2.shift());        // remove and print first element
console.log(array2.unshift(1));     // add 1 to the start and print new length
console.log(array2.concat([5, 6])); // merge arrays and print result
console.log(array2.slice(1, 3));    // print a shallow copy of elements 1..2
console.log(array2.splice(1, 2, 7)); // remove 2 elements from index 1, insert 7, print removed elements
console.log(array2.map(x => x * 2)); // print a new array with each value doubled
console.log(array2.filter(x => x > 2)); // print values greater than 2
console.log(array2.reduce((acc, x) => acc + x, 0)); // print sum of elements
console.log(array2.find(x => x > 3)); // print first element greater than 3
console.log(array2.findIndex(x => x === 3)); // print index of first element equal to 3
console.log(array2.includes(3));    // print whether 3 exists in the array
console.log(array2.indexOf(3));     // print first index of 3, or -1 if none
console.log(array2.lastIndexOf(3)); // print last index of 3, or -1 if none
console.log(array2.join(", "));     // print all items joined as a string
console.log(array2.reverse());      // reverse order and print array
console.log(array2.sort());         // sort elements and print array
console.log(array2.forEach(x => console.log(x))); // print each item one by one
console.log(array2.some(x => x < 0)); // print whether any element is negative
console.log(array2.every(x => x > 0)); // print whether all elements are positive
console.log(array2.flat());         // print flattened array one level
console.log(array2.flatMap(x => [x, x * 2])); // print mapped and flattened result
console.log(array2.fill(0, 1, 3));  // fill indexes 1..2 with 0 and print array
console.log(array2.copyWithin(0, 2)); // copy part of array to start and print result
console.log(Array.isArray(array2));  // print whether array2 is an array