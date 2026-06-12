//arrays part 2 
const marvel = ["ironman", "thor", "hulk"];
const dc = ["superman", "batman", "wonderwoman"];
marvel.push(dc) // merge arrays and print result
 console.log(marvel); // print marvel array after push
 // here dc is added as a single element at the end of marvel, not merged.

 const allheroes = marvel.concat(dc) // merge arrays and print result
    console.log(marvel); 
    // here marvel remains unchanged, concat returns a new array with dc merged.
    console.log(allheroes); // print the new merged array allheroes
    // 2. Merge multiple arrays
const arr3 = [1, 2];
const arr4 = [3, 4];
const merged = [...arr3, ...arr4];
console.log(merged); // [1, 2, 3, 4]
console.log(Array.from({name: "Alice", age: 30})); // [{name: "Alice", age: 30}]
// gives empty array 


 