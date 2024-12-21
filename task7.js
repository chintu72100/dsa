const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function findGCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}


function findLCM(a, b) {
    const gcd = findGCD(a, b);
    const lcm = (a * b) / gcd;
    return lcm;
}

readline.question('Enter value of a: ', (a) => {
    readline.question('Enter value of b: ', (b) => {
        
        a = parseInt(a);
        b = parseInt(b);

        const gcd = findGCD(a, b);
        const lcm = findLCM(a, b);

        console.log(`GCD of ${a} and ${b} = ${gcd}`);
        console.log(`LCM of ${a} and ${b} = ${lcm}`);

        readline.close();
    });
});
