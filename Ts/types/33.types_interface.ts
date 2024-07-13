// ********************
// * INTERFACE VS TYPE *
// ********************

// 1:
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.

// same Interface name treated as one

type Stud1 = {
    name: string;
    age: number;
};

type StudAddr1 = {
    city: string;
    state: string;
}

type Data1 = Stud1 | StudAddr1

const BioData1: Data1 = {
    name: "vinod",
    city: "Pune",
    state: "Andhra Pradesh"
}

console.log("BioData1=>", BioData1)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

interface Stud {
    name: string;
    age: number
}

interface StudAddr {
    city: string;
    state: string;
}

interface Data extends Stud, StudAddr { }

class BioData implements Data {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public state: string,
    ) { }
}

const BioData2 = new BioData("vinod", 34, "pune", "Andhra Pradesh")

console.log("BioData2", BioData2)