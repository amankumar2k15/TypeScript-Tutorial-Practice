//              Parent Class   |    Child Class |   Outside class
//    Public       ✅                  ✅               ✅
//    Protected    ✅                  ✅               ❌
//    Private      ✅                  ❌               ❌

// parent class
class Family {
    constructor(
        public name: string,                   //we need to add public here otherwise it will throw an error
        private age: number,
        protected hobbies: string[]
    ) { }

    introduce(): string {
        return `Hi , I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}


//child class
class Man extends Family {
    constructor(
        names: string,
        age: number,
        hobbies: string[],
        public grade: number                    //we need to add public here otherwise it will throw an error
    ) {
        super(names, age, hobbies)
    }
    introduce(): string {
        // return `${super.introduce()} and my grade is ${this.grade}.`;
        return `${this.hobbies}`
    }
    introduceClass(): any {
        // return `${this.age}`      // i cannot acccess age now bcoz it is PRIVATE 
    }

}


const family10: Family = new Family("aman", 12, ["reading", "painting"])
const family11: Family = new Family("kumar", 23, ["coloring", "riding"])
const family12: Family = new Family("singh", 45, ["tutorial", "jumping"])
const family13: Family = new Man("vikas", 45, ["debugging", "Coding"], 20)

console.log(family10.introduce())
console.log(family11)
console.log(family12)
console.log(family13.introduce())             //can accessed hobbies because it is inside of child class
// console.log(persons13.hobbies)              //cannot accessed hobbies because it is protected and outside of class



//outside class
const family19: Family = new Family("vinod", 12, ["singing", "crying"]);
const family20: Family = new Family("bahardur", 32, ["ragging", "dying"]);

const man: Family = new Man("bagga", 33, ["shibing", "diving"], 20)

// console.log(student19.hobbies)              //cannot accessed because it is protected