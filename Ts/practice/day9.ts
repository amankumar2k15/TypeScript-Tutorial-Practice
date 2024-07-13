// 9th video
// Q1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

const calculateAverage = (arrayOfNum: number[]): number => {
    let result = 0
    for (let i = 0; i < arrayOfNum.length; i++) {
        result += arrayOfNum[i]
    }
    return result / arrayOfNum.length

    // OR
    // return arrayOfNum.reduce((acc, curVal) => (acc + curVal)) / arrayOfNum.length
}

let averageNum = calculateAverage([1, 2, 3, 4, 5, 6])
console.log(averageNum)


// Q2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

const findMaxValue = (arr: number[]) => {

    let maxNum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const maxVal = findMaxValue([23, 32, 43, 12, 66, 87, 32])

console.log(maxVal)
