// Abstact classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
// Abstract class cannot be instantiated.

// Abstract classes focus on class inheritance and sharing common functionality,
// whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.


// abstract class PerObj {
//     name: string;
//     age: number;
// }

// class Person : PerObj = {
//     name: "Vinod",
//     age: 30,
// }
// class Person1 : PerObj = {
//     name: "Vinod",
//     age: 30,
// }
// class Person2 : PerObj = {
//     name: "Vinod",
//     age: 30,
// }


// Example: Shape Heirarchy
// Suppose you're building a graphics application, and you want to create a hierarchy of differnt shapes. You can use an abstract base class Shape to define common properties ,methods that all shapes share.


// circle, rectangle

abstract class Shape {
    constructor(protected color: string) { }
    abstract calculateArea(): number;            // ye property hai       
    abstract displayArea: () => void;            // method
}

class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color)
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }

    displayArea = (): void => {
        console.log(`This is a ${this.color} circle with radiys ${this.radius}.`)
    }
}

const circle = new Circle("red", 5)
console.log(circle.calculateArea())
circle.displayArea;


// Practice time 
// You need to do the same for Square and Rectangle and if possible use getters or setter methods  orr static members 
