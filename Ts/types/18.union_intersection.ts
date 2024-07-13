// -------------
//     Union 
// -------------

// Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type. In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.

const inputValue = (values: string | number | boolean) => { };

inputValue(55);
inputValue("hello world");
inputValue(true)

// Practice
// We will create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to input tos uppercase if it's a string, To acheive this, we can use a union type to allow the function to accept both numbers and strings.


const userInput = (value: number | string): number | string => {
    if (typeof value === "number") {
        return value * 2
    } else if (typeof value === "string") {
        return value.toUpperCase()
    } else {
        throw new Error("Invalid input data")
    }
}


console.log(userInput(10))
console.log(userInput("Subscribe"))



// ------------------
//     Intersection 
// ------------------

// Intersection types allow you to combine multiple types into a single type. You use the & (ampersand) symbol to define an intersection type.

type Person = {
    name: string;
    age: number
}

type Employee = {
    emp_id: number;
    department: string
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "vinod",
    age: 43,
    emp_id: 111,
    department: "IT"
}

const myPersonalInfo: Person = {
    name: "vinod",
    age: 29
}


//Practice : Create User Profile
// You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location. Create a function called createUserProfile that takes a User object and a MyLocation object as arguments and prints the user's name and the city they are from.

type User = {
    name: string;
    age: number;
}

type MyLocation = {
    city: string;
    country: string;
}

const user: User = { name: "aman", age: 29 }
const myLocation: MyLocation = { city: "Pune", country: "India" }

// defined 
const createUserProfile = (user: User, location: MyLocation) => {
    // return `my name is ${user.name} and I am living in city: ${location.city}`
    return { ...user, ...location }
}

//call 
const myCompleteInfo: User & MyLocation = createUserProfile(user, myLocation)
console.log(myCompleteInfo)