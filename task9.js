const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function hailstoneSequence(n) {
    let sequence = [];
    
    while (n !== 1) {
        sequence.push(n);
        if (n % 2 === 0) {
            n = n / 2;  
        } else {
            n = 3 * n + 1; 
        }
    }
    sequence.push(1); 
    console.log(sequence.join(" "));
}


readline.question('Enter a value of n: ', (n) => {
    n = parseInt(n); 
    hailstoneSequence(n); 
    readline.close(); 
});
