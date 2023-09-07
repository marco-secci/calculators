/// Import standard library; @ is used for built-in function, similar to the double underscore in Python (__init__):
/// By storing the imported package in a constant (e.g., const std = @import("std");), you can easily access
/// all the standard library functions and types using that constant as a prefix.
const std = @import("std");

// Main example:
pub fn main() !void {

    // Declaration of variables:
    // [_]f32 means that the variable defined is made of 32-bit floating-point numbers and its size is determined by its length;
    //  in this case the array is defined like [5]f32:
    const floatNumbers = [_]f32{ 1.0, 2.0, 3.0, 4.0, 5.0 };

    // Call of functions:
    const floatSum = try sumOfNumbers(f32, floatNumbers[0..]); // Converting the array to a slice
    const floatDiff = try differenceOfNumbers(f32, floatNumbers[0..]);

    // Print. note the using of std to call the built-in functions, located in the .debug submodule:
    std.debug.print("The sum of the list provided is: {d}\n ", .{floatSum});
    std.debug.print("The difference of the list provided is: {d}\n ", .{floatDiff});
}

// ========== //
// SUM METHOD //
// ========== //

// The T type of constant means "every type":
fn sumOfNumbers(comptime T: type, numbers: []const T) !T {

    // Type check:
    const type_info = @typeInfo(T);
    switch (type_info) {
        .Int => {},
        .Float => {},
        else => @compileError("The array or slice provided is NOT composed of only numbers!"),
    }

    // Initializing output variable and adding:
    var output: T = 0;
    for (numbers) |number| {
        output += number;
    }

    // Final output:
    return output;
}

// ================= //
// DIFFERENCE METHOD //
// ================= //
fn differenceOfNumbers(comptime T: type, numbers: []const T) !T {

    // Type check:
    const type_info = @typeInfo(T);
    switch (type_info) {
        .Int => {},
        .Float => {},
        else => @compileError("The array or slice MUST be composed of numbers only!! "),
    }
    //if (!@typeInfo(T).Float and !@typeInfo(T).Int) {
    //    @compileError("Type MUST be a number!! ");
    //}

    // If the list is empty return 0;
    if (numbers.len == 0) return 0;

    // Initializing output and subtracting:
    var output = numbers[0];
    // [1...] syntax for "from element at the index 1 and higher"; |number| is the loop variable, same as 'for number in numbers' in Python:
    for (numbers[1..]) |number| {
        output -= number;
    }

    // Final output:
    return output;
}

// ============== //
// PRODUCT METHOD //
// ============== //
fn productOfNumbers(comptime T: type, numbers: []const T) !T {

    // Type check:
    const type_info = @typeInfo(T);
    switch (type_info) {
        .Int => {},
        .Float => {},
        else => @compileError("The array or slice MUST be composed of numbers only!! "),
    }

    // Creating output and assigning its value to the neutral element 1:
    var output: T = 1;
    for (numbers) |number| {
        output *= number;
    }
    return output;
}
