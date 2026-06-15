// While loop examples and explanations

// Example 1: Simple counter using a while loop
// - Initialize a counter variable before the loop
// - The loop runs while the condition is true
// - Update the counter inside the loop to avoid an infinite loop
let i = 1; // start counting from 1
while (i <= 5) {
	console.log('Count:', i);
	i++; // increment the counter
}

// Example 2: Summing numbers from 1 to n using while
let n = 5;
let sum = 0;
let j = 1; // loop index
while (j <= n) {
	sum += j; // add current value to sum
	j++; // move to next number
}
console.log('Sum 1..' + n + ' =', sum);

// Example 3: Traversing an array using while
// - Use an index variable starting at 0
// - Continue while index is less than array length
// - Access elements by the current index and increment the index
const fruits = ['apple', 'banana', 'cherry'];
let index = 0; // start at the first element
while (index < fruits.length) {
	console.log('Fruit at', index, ':', fruits[index]);
	index++; // move to next element
}

// Example 4: Using break inside a while loop
let k = 1;
while (k <= 10) {
	if (k === 7) {
		console.log('Reached', k, '- breaking out of the loop');
		break; // exit the loop early
	}
	k++;
}

// -----------------------------
// do...while loop examples
// - The body runs first, then the condition is checked
// - Guarantees the loop runs at least once

// Example 1: Simple do...while counter
let a = 1;
do {
	console.log('Do-while count:', a);
	a++;
} while (a <= 3);

// Example 2: Traversing an array with do...while
const colors = ['red', 'green', 'blue'];
let idx = 0;
do {
	console.log('Color at', idx, ':', colors[idx]);
	idx++;
} while (idx < colors.length);

// Note: if the array is empty, a do...while body still runs once
// and accessing elements may return `undefined`. Use a guard
// (`if (colors.length === 0)`) when that behavior is undesirable.
