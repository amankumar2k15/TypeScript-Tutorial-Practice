// const product = {
//     name: "laptop",
//     price: 1000,
//     quantity: 5
// }

// !Calculate Total price
// Given the product object ,write a function called calculateTotalPrice that calculated and 
// returns the total price (price * quantity ) of the product.

type Product1 = {
    name: string;
    price: number;
    quantity: number
}

const product1: Product1 = {
    name: "laptop",
    price: 1000,
    quantity: 5
}

const calculateTotalPrice = (prod) => {
    return prod.price * prod.quantity
}

console.log(calculateTotalPrice(product1))