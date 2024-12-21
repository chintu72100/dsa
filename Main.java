import java.io.*;
import java.util.*;

class Solution{
     public static int maxConsecutiveOnes(int[] arr, int n) {
        // Your code here
        int count = 0;
        int maxCount = 0;
        for(int i=0; i<n; i++){
            if(arr[i]==1){
                count++;
                maxCount = Math.max(count, maxCount);
            }else{
                count = 0;
            }
        }
        return maxCount;
}
}

public class Main {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        Solution obj = new Solution();
        System.out.println(obj.maxConsecutiveOnes(arr, n));
    }
}
