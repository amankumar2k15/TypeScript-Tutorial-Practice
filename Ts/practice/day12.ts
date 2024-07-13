// 12th  Homework Time


//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const names: string[] = ['himanshi', 'shruti', 'jaya', 'aman', 'kanika', 'radhika', 'mukti']

// Ans1- 
const nameUpper = names.map((item: string) => item.toUpperCase())
console.log(nameUpper)


let square: number[] = [4, 5, 6, 7, 8]
//? 2: Given an array of numbers, create a new array that contains the square of each number.

// Ans- 
square = square.map((item: number) => item * 2)
console.log(square)


//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

// Ans- 
const kannu = names.filter((item: string) => item.length > 4)
console.log(kannu)

//? 2: Given an array of strings, filter out the names that start with the letter "A".
const kannu = names.filter((item: string) => item.charAt(0) === "A")
console.log(kannu)