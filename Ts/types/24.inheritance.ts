// Inheritence in TS

// Inheritence allows a class to reuse the functionality of an existing class without rewriting it.

// Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.

class Personss {
    name: string;
    age: number;
    hobbies: string[];

    constructor(
        names: string,
        age: number,
        hobbies: string[]
    ) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `Hi , I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}


class Students extends Personss {
    grade: number;
    constructor(names: string, age: number, hobbies: string[], grade: number) {
        super(names, age, hobbies)
        this.grade = grade
    }
    // introduce(): string {
    //     return `Hi , I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")} and my grade is ${this.grade}.`;
    // }
    // OR 
    introduce(): string {
        return `${super.introduce()} and my grade is ${this.grade}.`;
    }

}


const persons4: Personss = new Personss("aman", 12, ["reading", "painting"])
const persons5: Personss = new Personss("kumar", 23, ["coloring", "riding"])
const persons22: Personss = new Personss("singh", 45, ["tutorial", "jumping"])
const persons7: Personss = new Students("vikas", 45, ["debugging", "Coding"], 20)

console.log(persons4.introduce())
console.log(persons5)
console.log(persons22)
console.log(persons7.introduce())