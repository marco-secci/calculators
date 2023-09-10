// In C, there is no need of a Type check since it uses static definition of variables and constants:
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// ========== //
// SUM METHOD //
// ========== //

// Declaration of the variable as an array and its size:
float sum_of_numbers(float numbers[], int size)
{

    // Defining the ouput variable:
    float output = 0;

    // For loop syntax in C:
    for (int i = 0; i < size; i++)
    {

        output += numbers[i];
    }

    return output;
}

// ================= //
// DIFFERENCE METHOD //
// ================= //
float difference_of_numbers(float numbers[], int size)
{

    // If the array has no numbers then it's empty:
    if (size == 0)
    {
        return 0;
    }

    // Actual subtraction and definition of output:
    float output = numbers[0];
    for (int i = 1; i < size; i++)
    {
        output -= numbers[i];
    }

    return output;
}

// ============== //
// PRODUCT METHOD //
// ============== //
double product_of_numbers(double numbers[], int size)
{

    // Initialization of output with neutral element of the product:
    double output = 1.0;

    // Iteration of the array and multiplication of its elements:
    for (int i = 0; i < size; i++)
    {
        output *= numbers[i];
    }

    return output;
}

// =============== //
// DIVISION METHOD //
// =============== //
double division_of_numbers(double numbers[], int size)
{

    // If the size of the array is 0 then a 0 is returned:
    if (size == 0)
        return 0;

    // Output variable declaration and operation on the array:
    double output = numbers[0];
    for (int i = 1; 1 < size; i++)
    {
        if (numbers[i] == 0)
        {
            printf("Division by 0 is NOT allowed!");
            exit(EXIT_FAILURE);
        }
        output /= numbers[i];
    }
    return output;
}
// ============= //
// MODULO METHOD //
// ============= //
double modulo_of_numbers(double a, double b) {
    return a - floor(a / b) * b;
}

// ============ //
// POWER METHOD //
// ============ //
double power_of_numbers(double a, double b) {
    return pow(a, b);
}