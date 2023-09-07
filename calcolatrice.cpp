#include <iostream>
#include <vector>
#include <cmath>
#include <stdexcept>

// Declare a class named Calculator
class Calculator
{
public:

    // ========== //
    // SUM METHOD //
    // ========== //

    // Declare a static method named sumOfNumbers
    static float sumOfNumbers(std::vector<float> numbers)
    {

        // Initialize an integer variable named total to 0
        float total = 0;

        // Iterate over each element in the numbers vector using a range-based for loop
        for (float number : numbers)
        {

            // Add the current element to the total
            total += number;
        }

        // Return the total sum
        return total;
    }

public:

    // ================= //
    // DIFFERENCE METHOD //
    // ================= //
    static float differenceOfNumbers(std::vector<float> numbers)
    {

        // C++ has an .empty() function, very useful as it spares a lot of lines:
        if (numbers.empty())
        {
            return 0;
        }

        // Loops through the vector, starting from the second element; the first one is already in the output variable:
        float output = numbers[0];
        for (int i = 1; i < numbers.size(); i++)
        {
            output -= numbers[i];
        }

        // Final output:
        return output;
    }

public:

    // ============== //
    // PRODUCT METHOD //
    // ============== //
    static float productOfNumbers(std::vector<float> numbers)
    {

        // Initializing output variable as the neutral element 1:
        float output = 1.0;

        // Operating with the array; this for loop is prettier and more secure, as it takes every element of 'numbers', stores it into 
        // 'num' and keeps it constant during the whole interaction:
        for (const auto &num : numbers)
        {
            // Here we are checking if the input has an infinite or not numeric value. If so, an error will be thrown:
            if (std::isnan(num) || /*or*/ std::isinf(num))
            {
                throw std::invalid_argument("There's a not numeric input or an infinite input!!");
            }
            // Building the final result in the output variable:
            output *= num;
        }
        // Final output:
        return output;
    }
    // =============== //
    // DIVISION METHOD //
    // =============== //
    double divisionOfNumbers(const std::vector<double>& numbers) {

        // If the list is empty then the result is 0:
        if (numbers.empty())
            return 0;

        // Creating output and doing operation:
        double output = numbers[0];
        for (const auto& num : numbers) {
            if (num == 0) {
                throw std::invalid_argument("Division by 0 is NOT possible!!");
            }
            output /= num;
        }
        return output;
    }
};