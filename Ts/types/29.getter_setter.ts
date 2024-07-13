// Getter & Setter 

// In TS classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.

// TODO The get method doesn't take any parameters, and the set method takes only one parameter.

class Persons {

    private _age: number | undefined;        //age alg ho skti hai isliye constructor ke bahar rakhi hui h 
   
    constructor(
        public name: string,
        protected hobbies: string[]
    ) { }

    public set age(newAge: number) {
        if (newAge > 150 || newAge < 0) {
            throw new Error("age is not valid")
        }
        this._age = newAge
    }

    public get age() {
        if (this._age === undefined) {
            throw new Error("age is not valid")
        }
        return this._age;
    }

    introduceParent(): string {
        return `Hi I'm ${this.name} and I am ${this._age} years old. I love ${this.hobbies.join(", ")}.`
    }

}

const persons6: Persons = new Persons("aman", ["learning", "bidding"])

persons6.age = 12;

console.log(persons6.introduceParent())
console.log(persons6.age)