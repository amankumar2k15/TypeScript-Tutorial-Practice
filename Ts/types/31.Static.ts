// In TS,  static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class withour needing to create an instance of the class. this is useful for utility funtions or properties that don't rely on instacne-specific data.

// Example Math Operations Utility - creating a utility classs to perform various mathematical operations.

class MathOperations {
    public static PI: number = Math.PI;

    public static add(num1: number, num2: number): number {
        return num1 + num2
    }
    public static sub(num1: number, num2: number): number {
        return num1 - num2
    }
}

console.log(MathOperations.PI)
console.log(MathOperations.add(3, 6))
console.log(MathOperations.sub(9, 7))