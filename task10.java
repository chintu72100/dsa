public class task10 {
    public static void main(String[] args) {
        int[] nums = {1, 5, 3, 1, 3, 5, 6};
        calculateFrequencies(nums);
    }

    public static void calculateFrequencies(int[] nums) {
        boolean[] visited = new boolean[nums.length];

        for (int i = 0; i < nums.length; i++) {
            
            if (visited[i]) {
                continue;
            }

            int count = 1; 
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                    visited[j] = true; 
                }
            }

            
            System.out.println(nums[i] + "-" + count);
        }
    }
}