// In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.

interface Greet {
    name: string;
    age: number;
}

const greets: Greet = {
    name: 'vinod',
    age: 29,
}


// Question- 

//todo Create a Products Object:
//? Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 1000
// Quantity: 5

interface Products {
    name: string;
    price: number;
    quantity: number
}

const product2: Products = {
    name: "Widget",
    price: 10.30,
    quantity: 30
}

const product3: Products = {
    name: "Utensils",
    price: 53.10,
    quantity: 20
}


const calculateTotalPrices = (product: Products): number => {
    const { price, quantity } = product;
    return price * quantity
}


console.log(calculateTotalPrices(product2))
console.log(calculateTotalPrices(product3))