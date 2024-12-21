const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function fib(n) {
    // write code here
    if(n==1){
      return 0;
    }else if(n==2){
      return 1;
    }
    let fib1 = fib(n-1);
    let fib2 = fib(n-2);
    let fibn = fib1 + fib2
    return fibn
  }
  
  readline.question('', n => {
    console.log(fib(Number(n)));
    readline.close();
  });