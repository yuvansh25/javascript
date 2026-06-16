// filter mapp reduce 

const code = ["js","c","c++","react","rust"];

//  const value = code.forEach((item) => {
//    console.log(item);
//    return item;
// });

// console.log(value);

const mynum = [1,2,3,4,5,6]
 
const value = mynum.filter( (num) => num > 4 )
const value = mynum.filter( (num) => {
   return num > 4
} );

console.log(value);

// Array of book objects with name, author, publishedDate, pages, and genre
const books = [
   { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", published: "1937-09-21", pages: 310, genre: "Fantasy" },
   { id: 2, title: "1984", author: "George Orwell", published: "1949-06-08", pages: 328, genre: "Dystopian" },
   { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", published: "1960-07-11", pages: 281, genre: "Fiction" },
   { id: 4, title: "Clean Code", author: "Robert C. Martin", published: "2008-08-01", pages: 464, genre: "Programming" },
   { id: 5, title: "You Don't Know JS Yet", author: "Kyle Simpson", published: "2020-01-28", pages: 278, genre: "Programming" }
];

//const userbooks = books.filter( (bk) => bk.title === "1984" );
const userbooks = books.filter( (bk) => { return bk.title === "1984" } );

console.log(userbooks);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //map
const mynumbers = [1,2,3,4,5,6]

const newnum = mynumbers.map( (num) => {
   console.log(num);
   return num;
}
);

console.log(newnum);

// Example: chaining multiple map calls on a number array
const numbers = [1, 2, 3, 4, 5];

const transformed = numbers
   .map(n => n * 2)    // double each number -> [2,4,6,8,10]
   .map(n => n + 1)    // add one to each -> [3,5,7,9,11]
   .map(n => `#${n}`); // convert to string with a prefix -> ["#3","#5",...]

console.log('numbers:', numbers);
console.log('transformed:', transformed);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//reduce 
const nums = [1,2,3,4,5,6]

const sum = nums.reduce( (acc, num) => {
   console.log(`acc: ${acc}, num: ${num}`);
   return acc + num;
}, 0 );

console.log(sum);

const shoppingCart = [
   { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
   { id: 2, name: "Headphones", price: 199.99, quantity: 2 },
   { id: 3, name: "Mouse", price: 49.99, quantity: 1 },
   { id: 4, name: "Keyboard", price: 89.99, quantity: 1 }
];

const totalCost = shoppingCart.reduce( (total, item) => {
   return total + (item.price * item.quantity);
}, 0 );

console.log(`Total Cost: $${totalCost.toFixed(2)}`);    