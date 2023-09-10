# Imports:
import math
from math import prod
import numpy as np


class Calculator:


    # ========== #
    # METHOD SUM #    
    # ========== #
    def sum(numbers):
        
        # Type check:
        if not isinstance(numbers, list):
            raise TypeError("Input must be a list.")
        
        # If there are no numbers in the list, then it's empty:
        if len(numbers) == 0:
            return 0
        
        # Type check:
        for number in numbers:

            if not isinstance(number, (int, float)):
                raise TypeError("All elements in the list MUST be numbers!")
        
        # Final output:
        return sum(numbers)

    # ================= #
    # METHOD DIFFERENCE #
    # ================= #
    def difference(numbers):

        # Type check:
        if not isinstance(numbers, list):
            raise TypeError("Input must be a list. ")

        # If there are no numbers in the list, then it's empty:
        if len(numbers) == 0:
            return 0
        
        # Actual subtraction operation:
        # Defining variable to output:
        output = numbers[0]
        for number in numbers[1:]:

            # Type check:
            if not isinstance(number, (int, float)):
                raise TypeError("All elements in the list MUST be numbers!")
            
            output -= number
        
        # Final output:
        return output
    
    # ============== #
    # METHOD PRODUCT #
    # ============== #
    def product(numbers):
        if not all(isinstance(x, (int, float)) for x in numbers):
            raise TypeError("All elements must be integers or floats")
        return prod(numbers)
    
    # =============== #
    # DIVISION METHOD #
    # =============== #
    def division(numbers):
        
        # Type checks:
        if not isinstance(numbers, list):
            raise TypeError("Input must be a list")
        
        for num in numbers:
            if not isinstance(num, (int, float)):
                raise TypeError("All elements in the list must be integers or floats")
        
        # List empty = 0:
        if len(numbers) == 0:
            return 0
        
        # Final output:
        output = numbers[0]
        for num in numbers[1:]:
            if num == 0:  # Check for division by zero
                raise ZeroDivisionError("Division by zero is not allowed")
            output /= num
        
        return output
    
    # -- For the following two methods, two inputs are enough since you can't do these operation with more than two numbers -- #

    # ============= #
    # MODULO METHOD #
    # ============= #
    def modulo(a, b):

        # Type check:
        if not isinstance(a, b, (int, float)):
            raise TypeError("You must input numbers!!")
    
        # Output; by using this formula is ensured that operation with non-integers number is
        # accepted too:
        return a - b * np.floor_divide(a/b)
    
    # ============ #
    # POWER METHOD #
    # ============ #
    def power(a, b):

        # Type check:
        if not isinstance(a, b, (int, float)):
            raise TypeError("You must input numbers!!")
        
        # Output:
        return math.pow(a, b)
    
    # ============ #
    # ROOT METHODS #
    # ============ #
    def square_root(x):
        
        # Type check:
        if not isinstance(x, (int, float)):
            raise TypeError("Input is NOT a number!")
        if x < 0:
            raise ValueError("The square root of a negative number is impossible to make!!")
        
        # Final output: 
        return math.sqrt(x)
    
    def cube_root(x):

        # Type check:
        if not isinstance (x, (int, float)):
            raise TypeError("Input is NOT a number!!")
        if x < 0:
            raise ValueError("Square root of a negative number is impossible!!")
    
        # Final output:
        return math.pow(x, 1/3)
    
    def nth_root(x, n):

        # Type check:
        if not isinstance(x, n,  (int, float)):
            raise TypeError("Input is NOT a number!!")
        if x < 0:
            raise ValueError("Square root of a negative number is impossible!!")
        
        # Final output:
        return math.pow(x, 1/n)
    
    # 
    # LOGARITHM METHODS #