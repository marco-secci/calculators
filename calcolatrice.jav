
public class Calculator {

    /* "static" is a keyword that indicates that the method belongs to the class itself rather than a single specific instance of it; this is to
    be able to call the method without the need to create an instance.
    Java has a static variable declaration. */
    
    // ========== //
    // SUM METHOD //
    // ========== //

    public static float sumOfNumbers(float[] numbers) {

        float output = 0;
        for (float number : numbers) {

            output += number;
        }
        return output;
    }

    // ================= //
    // DIFFERENCE METHOD //
    // ================= //
    public static float differenceOfNumbers(float[] numbers) {

        // Type check:
        if (!(numbers instanceof float[])) {
            throw new IllegalArgumentException("Input must be an array of numbers!")
        }

        // If the array has no elements the output is 0:
        if (numbers.length == 0) {
            return 0;
        }

        // Actual operation and definition of the output:

        int output = numbers[0];
        for (int i = 1; i<numbers.length; i++) {
            output -= numbers[i];
        }

        return output;

    }

    // ============== //
    // PRODUCT METHOD //
    // ============== //
    public static double productOfNumbers(double[] numbers) {

        // Defining output variable:
        double output = 1.0;

        // Type check for NaN and infinite values:
        for (double num : numbers) {
            if (Double.isNaN(num) || Double.isInfinite(num)) {
                throw new IllegalArgumentException("Input can't be infinite or non numeric!");
            }
            output *= num;
        }
        return output;
    }
}
