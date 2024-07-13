// In TS, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different partss of your code, Type aliases provide better readablitiy, organizationm and abstraction of complex types.

// To define a type alias , we use the type keyword followed by the alias name and the type  definition:

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string
    }
}

const person1: Person = {
    name: "Aman",
    age: 25,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
}

const person2: Person = {
    name: "Rohit",
    age: 32,
    isStudent: true,
    address: {
        city: "Mumbai",
        country: "Bangalore"
    }
}

console.log(person1.age)
console.log(person1.address.city)
console.log(person2.age)
console.log(person2.address.city)