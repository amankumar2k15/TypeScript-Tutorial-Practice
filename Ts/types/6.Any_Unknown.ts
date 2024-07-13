// * ---------------------
//         Any  TYPE 
// * ---------------------


// The any type is the most flexible  type in TS. It essentially turns off all type checking for the variables or expressions it is applied to.

let myFavNum1: any = 5;
myFavNum1 = "vinod"

console.log(myFavNum)

// Use work
// Working with Dynamic Data: When dealing with data from dynamic sources like user inputs,  network responnses, or deserialized JSON objects, the any type can be useful.

//Migration from JS : When migrating an existing JS codebase to TS, using the any type can be a convenient way to quickly annotate variables and functions without immediately specifying their precise 

// ======================================================================================================================

// * ---------------------
//         Unknown  TYPE 
// * ---------------------

// The unknown type is a server-alternative to any becoz it still enforces type checking and type safety. 
// Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them using them in specific ways.

let num2: unknown
num2 = 5
num2 = "thapa"
num2 = true

if (typeof num2 === "number") {
    console.log(num2 + 5)
} else if (typeof num2 === "boolean") {
    console.log(num2)
}


// ex =>  
async function fetchData(): Promise<unknown> {
    const response = await fetch("https://api.example/com/data");
    const data = await response.json();
    return data
}

async function processData() {
    const response = await fetchData()
    if (typeof response === "object") {
        // perform operations on the response Object
    }
}