// Imports:
import java.util.List;
import java.util.Arrays;

// ================ //
// CALCULATOR CLASS //
// ================ //
public class Calculator {

    /* "static" is a keyword that indicates that the method belongs to the class itself rather than a single specific instance of it; this is to
    be able to call the method without the need to create an instance.
    Java has a static variable declaration. */
    
    // ========== //
    // SUM METHOD //
    // ========== //

    public static double sumOfNumbers(List<Double> numbers) {

        // Empty check:
        if (numbers.isEmpty()) return 0;

        double output = 0;
        for (Double num : numbers) {

            output += num;
        }
        return output;
    }

    // ================= //
    // DIFFERENCE METHOD //
    // ================= //
    public static double differenceOfNumbers(List<Double> numbers) {

        // If the array has no elements the output is 0:
        if (numbers.isEmpty()) return 0;

        // Actual operation and definition of the output:
        double output = numbers.get(0);
        for (Double num: numbers.subList(1, numbers.size())) {
            output -= num;
        }

        return output;

    }

    // ============== //
    // PRODUCT METHOD //
    // ============== //
    public static double productOfNumbers(List<Double> numbers) {

        // Empty check:
        if (numbers.isEmpty()) return 0;

        // Defining output variable:
        double output = 1;

        // Type check for NaN and infinite values:
        for (Double num : numbers) {
            if (Double.isNaN(num) || Double.isInfinite(num)) {
                throw new IllegalArgumentException("Input can't be infinite or non numeric!");
            }
            output *= num;
        }

        return output;
    }
    // =============== //
    // DIVISION METHOD //
    // =============== //
    public static double divisionOfNumbers(List<Double> numbers) {

        // If the array has no element, then the result is 0:
        if (numbers.isEmpty()) return 0;

        // Defining output and doing operation:
        double output = numbers.get(0);
        for (Double num : numbers.subList(1, numbers.size())) {
            output /= num;
        }

        return output;

    }
    // ============= //
    // MODULO METHOD //
    // ============= //
    public static double moduloOfNumbers(double a, double b) {
        return a - b * Math.floor(a/b); 
    }

    // ============ //
    // POWER METHOD //
    // ============ //
    public static double powerOfNumbers(double a, double b) {
        return Math.pow(a, b);
    }

}

public static void main(String[] args) {
    List<Double> sampleList = Arrays.asList(10.0, 2.0, 5.0);  
        
    System.out.println("The sum is: " + sumOfNumbers(sampleList));
    System.out.println("The difference is: " + differenceOfNumbers(sampleList));
    System.out.println("The product is: " + productOfNumbers(sampleList));
    System.out.println("The division is: " + divisionOfNumbers(sampleList));
}