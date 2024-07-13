// -----------------
//    ENUM in TS 
// -----------------


// Enums in TS are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific maeanings.

// In TS, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented  by 1.

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
}

const user1: LoginDetails = {
    name: "Aman",
    email: "aman.kumar@gmail.com",
    password: "Aman@123",
    role: Roles.admin
}

const user2: LoginDetails = {
    email: "vinod123@gmail.com",
    password: "vinod@123",
    role: Roles.user
}

const isAdmin1 = (user1: LoginDetails): string => {
    // const isAdmin1: (user1: LoginDetails) => string = (user1: LoginDetails): string => {
    const { name, role, email } = user1;
    return role === "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`
}

const isAdmin2 = (user2: LoginDetails): string => {
    const { name, role, email } = user2;
    return role === "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`
}

console.log(isAdmin1(user1));
console.log(isAdmin2(user2));