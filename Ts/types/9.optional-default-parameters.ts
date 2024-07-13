// Optional and Default Parameters 

// TypeScript allows you to define optional and default parameters in functions.
// Optional parameters are denoted by appending a ? symbol after the paramter name,
// and default parameters are specified by providing a default value in the parametere declaration.



// --------------------
//      Default Paremeter 
// --------------------

const greet = (name: string, id: number = 2): string => {
    return `Welcome, ${name} and your id is ${id}`
}

const emp = greet("vinod")

console.log(emp)

// =================================================================================================

// --------------------
//      Optional Parameter 
// --------------------

const greet2 = (name: string, id?: number): string => {
    if (id) {
        return `Welcome, ${name} and your id is ${id}`
    } else {
        return `Welcome, ${name}`
    }
}

const emp1 = greet2("aman")
const emp2 = greet2("aman", 3)

console.log(emp1)
console.log(emp2)