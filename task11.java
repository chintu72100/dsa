import java.util.Scanner;

public class task11 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking input for the array
        System.out.print("Enter array elements separated by space: ");
        String input = scanner.nextLine();
        String[] strArray = input.split(" ");

        // Convert the input string array to an integer array
        int[] nums = new int[strArray.length];
        for (int i = 0; i < strArray.length; i++) {
            nums[i] = Integer.parseInt(strArray[i]);
        }

        // Get the third maximum number
        int result = thirdMax(nums);

        // Output the result
        System.out.println(result);

        scanner.close();  // Close the scanner
    }

    // Function to find the third distinct maximum number
    public static int thirdMax(int[] nums) {
        // Remove duplicates manually using a helper array
        int[] distinctNums = new int[nums.length];
        int distinctCount = 0;

        // Loop through the nums array and collect distinct elements
        for (int i = 0; i < nums.length; i++) {
            boolean isDistinct = true;
            for (int j = 0; j < distinctCount; j++) {
                if (nums[i] == distinctNums[j]) {
                    isDistinct = false; // If found in distinctNums, it's not distinct
                    break;
                }
            }

            if (isDistinct) {
                distinctNums[distinctCount++] = nums[i];
            }
        }

        // If there are fewer than 3 distinct numbers, return the largest one
        if (distinctCount < 3) {
            int max = distinctNums[0];
            for (int i = 1; i < distinctCount; i++) {
                if (distinctNums[i] > max) {
                    max = distinctNums[i];
                }
            }
            return max; // Return the largest number
        }

        // Sort the distinct array in descending order (Bubble Sort)
        for (int i = 0; i < distinctCount - 1; i++) {
            for (int j = i + 1; j < distinctCount; j++) {
                if (distinctNums[i] < distinctNums[j]) {
                    // Swap if the current element is smaller than the next element
                    int temp = distinctNums[i];
                    distinctNums[i] = distinctNums[j];
                    distinctNums[j] = temp;
                }
            }
        }

        // Return the third largest element (index 2)
        return distinctNums[2];
    }
}
