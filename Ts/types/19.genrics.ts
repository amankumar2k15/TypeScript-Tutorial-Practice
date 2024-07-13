// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types 

function logAndReturn(value: number | string | boolean): number | string | boolean {
    console.log(value)
    return value
}

const numberResult: string | number | boolean = logAndReturn(42)
const stringResult: string | number | boolean = logAndReturn("Hello_Goodmorning")
const booleanResult: string | number | boolean = logAndReturn(false)

console.log(numberResult)
console.log(stringResult)
console.log(booleanResult)

// ===================================
//                or
//    Below is the generics example
// ===================================


function logAndResult<Type>(value: Type): Type {
    return value
}

const numberResult1 = logAndResult<number>(42)
const stringResult1 = logAndResult<string>("Hello_Goodmorning")
const booleanResult1 = logAndResult<boolean>(false)

console.log(numberResult1)
console.log(stringResult1)
console.log(booleanResult1)