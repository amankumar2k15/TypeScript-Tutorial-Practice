const person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string
    }
} = {
    name: "Aman",
    age: 25,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
}

console.log(person.age)
console.log(person.address.city)