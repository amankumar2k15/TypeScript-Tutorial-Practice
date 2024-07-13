//              Parent Class   |    Child Class |   Outside class
//    Public       ✅                  ✅               ✅
//    Protected    ✅                  ✅               ❌
//    Private      ✅                  ❌               ❌

// parent class
class Personsss {
    public name: string;
    private age: number;
    protected hobbies: string[];

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


//child class
class Studentss extends Personsss {
    grade: number;

    constructor(names: string, age: number, hobbies: string[], grade: number) {
        super(names, age, hobbies)
        this.grade = grade
    }
    introduce(): string {
        // return `${super.introduce()} and my grade is ${this.grade}.`;
        return `${this.hobbies}`
    }
    introduceClass(): any {
        // return `${this.age}`      // i cannot acccess age now bcoz it is PRIVATE 
    }

}


const persons10: Personsss = new Personsss("aman", 12, ["reading", "painting"])
const persons11: Personsss = new Personsss("kumar", 23, ["coloring", "riding"])
const persons12: Personsss = new Personsss("singh", 45, ["tutorial", "jumping"])
const persons13: Personsss = new Studentss("vikas", 45, ["debugging", "Coding"], 20)

console.log(persons10.introduce())
console.log(persons11)
console.log(persons12)
console.log(persons13.introduce())             //can accessed hobbies because it is inside of child class
// console.log(persons13.hobbies)              //cannot accessed hobbies because it is protected and outside of class



//outside class
const persons19: Personsss = new Personsss("vinod", 12, ["singing", "crying"]);
const persons20: Personsss = new Personsss("bahardur", 32, ["ragging", "dying"]);

const student19: Personsss = new Studentss("bagga", 33, ["shibing", "diving"], 20)

// console.log(student19.hobbies)              //cannot accessed because it is protected