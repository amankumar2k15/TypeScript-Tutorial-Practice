// A  typeof guard in TS lets you narrow down the type of a variable based on its runtime value. In TS, type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstance. This is particularly useful with union types and generic types.

const favHobbies = (hobby: string | string[]) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        const result = hobby.map((item) => item);
        console.log(result)
    } else {
        console.log(hobby)
    }
}

favHobbies("coding");
favHobbies(["coding", "games"])