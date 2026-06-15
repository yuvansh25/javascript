// iterations 
// +++++++++++ for loop ++++++++++++++++
// start at 1, continue while i is less than or equal to 10,
// and increment i by 1 after each loop iteration

for (let i = 1; i <= 10; i++) {
  // loop continues while i is less than or equal to 10
  // the body runs once for each value of i
  console.log(i); // print the current value of i

  // after each iteration, i is incremented by 1
  // then the loop checks the condition again
}


// outer loop runs from 1 to 3
for (let i = 1; i <= 3; i++) {
  // inner loop runs from 1 to 3 for each outer iteration
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`); // print the current pair of values
  }
}
//traversing a array 
const numbers = [10, 20, 30, 40, 50];

// loop through each index in the array
for (let i = 0; i < numbers.length; i++) {
  // access the current element by index
  const value = numbers[i];
  console.log(value); // print the current array value
}

//+++++++++ break & continue +++++++++++++++
const numbers = [1, 2, 3, 4, 5];

// stop the loop early when value is 4
for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];

  if (value === 4) {
    // exit the loop completely
    break;
  }

  console.log(value); // prints 1, 2, 3
}

for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];

  if (value % 2 === 0) {
    // skip this iteration and move to the next one
    continue;
  }

  console.log(value); // prints 1, 3, 5
}