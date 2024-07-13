// Write a typescript function isDivisibleBy 4 and 8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.

function isDivisible(a: number): boolean {                //here :number is a type annotations
    if (a % 4 == 0 && a % 8 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isDivisible(12))

