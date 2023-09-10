// ========== //
// SUM METHOD //
// ========== //
// The function sumOfNumbers takes an array numbers as an input:
function sumOfNumbers(numbers) {
    // Type check. "!" is used to negate the following statement:
    if (!Array.isArray(numbers)) {
        throw new Error("Input is NOT an array!!");
    }

    // With "let", the variable is initialized; in this occasion, the variable total is initialized to 0:
    let total = 0;
    // Syntax of the for loops in JavaScript:
    for (let number of numbers) {
        // Type check:
        if (typeof number !== "number") {
            throw new Error("All elements in the array MUST be numbers!");
        }
        total += number;
    }
    return total; // Final return.
}

// ================= //
// DIFFERENCE METHOD //
// ================= //
function differenceOfNumbers(numbers) {
    // Type check:
    if (!Array.isArray(numbers)) {
        throw new Error("Input is NOT an array!!");
    }

    // If there are no numbers in the array, then it's empty:
    if (numbers.length === 0) {
        return 0;
    }

    // Actual subtraction operation:
    // Defining output variable:
    output = numbers[0];

    // Type check:
    for (let number of numbers.slice(1)) {
        if (typeof number !== "number") {
            throw new Error("All elements in the array must be numbers!!");
        }
        output -= number;
    }

    // Final output:
    return output;
}

// ============== //
// PRODUCT METHOD //
// ============== //
function productOfNumbers(numbers) {
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
function divisionOfNumbers(numbers) {
    // Type checks:
    if (!Array.isArray(numbers)) {
        throw new TypeError("The input MUST be an array!!");
    }

    for (const num of numbers) {
        if (typeof num !== "number") {
            throw new TypeError("Elements of the array MUST be numbers!!");
        }
    }

    // If the array is empty, the final result is 0:
    if (numbers.lenght === 0) return 0;

    // Defining output variable and making the operation:
    let output = numbers[0];
    for (const num of numbers.slice(1)) {
        if (num === 0) throw new Error("Division by 0 are NOT possible!");
        output /= num;
    }

    return output;
}

// ============= //
// MODULO METHOD //
// ============= //
function moduloOfNumbers(a, b) {

    // Type check:
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both inputs MUST be numbers!!");
    }
    return a - b * Math.floor(a / b);
}

// ============ //
// POWER METHOD //
// ============ //
function powerOfNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both inputs MUST be numbers!!");
    }
    return Math.pow(a, b);
}