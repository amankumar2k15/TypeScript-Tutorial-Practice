type Student = {
    name: string;
    age: number;
    gender?: string;                                 //here "?" symbol is defining "optional parameter"
    greet: (country: string) => string               //Method Call Signature   // here greet naam ka method hai jisme country jo ki string value hai usko as a parameter liya hai and greet function ek string(ye last vala string) return karega
}

const student1: Student = {
    name: "Aman",
    age: 25,
    greet: (country): string => {
        return `Welcome My name is ${student1.name}, I am ${student1.age} years old & I am from ${country}`
    }
}

const student2: Student = {
    name: "Vikas",
    age: 29,
    greet: function (country: string): string {
        return `Welcome My name is ${this.name}, I am ${this.age} years old & I am from ${country}`
    }
}

const introduction: (student1: Student) => string = (student1: Student): string => {
    const { name, age } = student1;
    return `Welcome My name is ${name}, I am ${age} years old`
}

console.log(introduction(student1))
console.log(student1.greet("India"))
console.log(student2.greet("Australia"))