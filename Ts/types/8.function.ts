//Normal function
function greet(name: string, age: number): string {                       //in result ":string"  ki jagah by default ":void" hota h
    return `My name is ${name} and I am ${age} years old`
}

console.log(greet("Aman", 45))

//Arrow Function
const meet = (name: string, age: number): string => {
    return `My name is ${name} and I am ${age} years old`
}

console.log(meet("Vikas", 24))



//IsPalindrome Question
// Write a function called IsPalindrome that takes a string as a parameter and return ture if the string is a palindrome (reads tje same forwards and backwards), and flase otherwise.

const IsPalindrome = (num: string): boolean => {
    let newNum = num.split("").reverse().join("")
    if (newNum === num) {
        return true
    } else {
        return false
    }
}

console.log(IsPalindrome("123454321"))
