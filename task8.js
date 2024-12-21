const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function balanceArray(nums) {
    const n = nums.length;
    const half = n / 2;
    
    
    let sumFirstHalf = 0;
    for (let i = 0; i < half; i++) {
        sumFirstHalf += nums[i];
    }

    
    let sumSecondHalf = 0;
    for (let i = half; i < n; i++) {
        sumSecondHalf += nums[i];
    }

    if (sumFirstHalf < sumSecondHalf) {
        return sumSecondHalf - sumFirstHalf;
    } else {
        return 0; 
    }
}

// Prompt the user for input
readline.question('Enter array elements separated by space: ', (input) => {
    const nums = input.split(' ').map(Number);  // Convert input into an array of numbers
    const result = balanceArray(nums);
    console.log(result);

    readline.close(); 
});
