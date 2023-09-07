/* TypeScript is JavaScript with static variable definition; here numbers is defined as a list and the function's output is defined as a number. 
For anything else simply refer to the JavaScript comments */

// ========== //
// SUM METHOD //
// ========== //
function sumOfNums(numbers: number[]): number {
    // Type check:
    if (!Array.isArray(numbers)) {
        throw new Error("Input is NOT an array!! ");
    }

    let total: number = 0;
    for (let number of numbers) {
        // Type check:
        if (typeof number !== "number") {
            throw new Error("All elements of the array MUST be numbers!! ");
        }
        total += number;
    }

    return total;
}

// ================= //
// DIFFERENCE METHOD //
// ================= //
function differenceOfNums(numbers: number[]): number {
    // Type check:
    if (!Array.isArray(numbers)) {
        throw new Error("Input is NOT an array!! ");
    }

    // If the list has no numbers then it's empty:
    if (numbers.length === 0) {
        return 0;
    }

    // Actual subtraction operation:
    // Defining output variable and initializing it as a number:
    let output: number = numbers[0];
    for (let number of numbers.slice(1)) {
        if (typeof number !== "number") {
            throw new Error("All elements of the array MUST be numbers!! ");
        }

        output -= number;
    }

    return output;
}

// ============== //
// PRODUCT METHOD //
// ============== //

// Works exactly as in JS:
function productOfNums(numbers: number[]): number {
    // Type check; || is the OR operator and the arrow works as an 'into' operator:
    if (!Array.isArray(numbers) || !numbers.every((num) => typeof num === "number")) {
        throw new TypeError("Input is NOT an array of numbers! ");
    }

    // acc is the js way of iterating an array; acc starts from 1 and takes the value
    // chosen for it and num changes for every iteration:
    return numbers.reduce((acc, num) => acc * num, 1);
}

// =============== //
// DIVISION METHOD //
// =============== //
function divisionOfNums(numbers: number[]): number {
    // If array is empty, the result is 0:
    if (numbers.length === 0) return 0;

    // Declaration of output:
    let output = numbers[0];
    // Operation:
    for (const num of numbers.slice(1)) {
        if (num === 0) throw new Error("Division by 0 is NOT possible!!");
        output /= num;
    }
    return output;
}
