// In TS , tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type , and their size can vary.


// const favCity: any[] = ["nepal", "india", "bangladesh", true, 55]

// Defining a tuple type for person info
type PersonInfo = [string, number, boolean]


// const displayPersonInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
const displayPersonInfo = (person: PersonInfo): void => {
    const [name, age, driverLicence] = person
    console.log(`Name : ${name} , Age : ${age}, Driving Licence : ${driverLicence ? "Yes" : "No"}`)
}

const person_aman: PersonInfo = ["aman", 25, true]
const person_kannu: PersonInfo = ["kannu", 22, false]
// const person2: PersonInfo = [32, "kannu", true]      //It won't work

displayPersonInfo(person_aman)
displayPersonInfo(person_kannu)


