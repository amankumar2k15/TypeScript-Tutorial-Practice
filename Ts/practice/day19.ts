//!! HomeWork Time
//! Here is the function overloading Example? Which I will tell you in tomorrow video
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

const result1 = add(5, 10); // Output: 15
const result2 = add("Hello, ", "world!"); // Output: "Hello, world!"

//? You need to code the same using he Generics Types.  