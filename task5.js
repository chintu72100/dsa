function fizzBuzz(n) {
    
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    
    else if (n % 3 === 0) {
        return "Fizz";
    }
    
    else if (n % 5 === 0) {
        return "Buzz";
    }
    
    else {
        return String(n);
    }
}


const n = parseInt(prompt("Enter a value of n: "));
alert(fizzBuzz(n));
