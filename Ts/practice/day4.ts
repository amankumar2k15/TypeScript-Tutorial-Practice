
//4th video        
// todo 👉  Substring: 
// Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

// Ans1-  
let longText: string = "Aman is in a mood to solve the problem";
let shortText = longText.substring(0, 10);
console.log(shortText)          //Kanika is

//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

// Ans2- 
const str1: string = "Kanika is very pretty by her sentence";
const str2: string = "Kanika is very pretty by her sentence"
const areEqual: boolean = str1 === str2
console.log(areEqual)                               //false 


//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."

// Ans3- 
const product: string = "Baby Jhonson";
const price: number = 200;

console.log(`The product ${product} is priced at ${price} dollars.`)









// // question 1
// // Declare a variable longText of type string and assign it a long sentence. Extract the first 10 characters from longText and store them in a variable called shortText.

// const longText: string = "This is the long string of the longText variable";

// const shortText: string = longText.substring(0,10);

// console.log("shortText:" ,shortText);


// // question 2
// // Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.

// const str1: string = "hello";
// const str2: string = "hi";

// const areEqual: boolean = (str1 == str2) ;

// console.log("areEqual: ",areEqual);

// // question 3
// // Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
// const product: string = "Biscut";
// const price: number = 34;

// console.log(`The product ${product} is priced at ${price} dollars.`)