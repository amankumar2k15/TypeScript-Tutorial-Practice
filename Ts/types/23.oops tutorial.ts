// How  to creater a class and also instance of class in TS

// A  class in terms of OOP is a blueprint for creating objects
// A  class is like a blueprint for creating similar things.

// In TS, there is a convention to use Pascal Case( also known as UpperCamelCase) for class names. This means that class names should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.

class Persan {
    name: string;
    age: number;
    hobbies: string[];

    constructor(names: string, age: number, hobbies: string[]) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
}

const persons1: Persan = new Persan("aman", 12, ["reading", "painting"])
const persons2: Persan = new Persan("kumar", 23, ["coloring", "riding"])
const persons3: Persan = new Persan("singh", 45, ["tutorial", "jumping"])

console.log(persons1)
console.log(persons2)
console.log(persons3)
