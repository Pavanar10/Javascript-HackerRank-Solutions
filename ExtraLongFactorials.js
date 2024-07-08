//The factorial of the integer , written , is defined as: Calculate and print the factorial of a given integer.it 
//should print big int

function extraLongFactorial(n){

    let res = BigInt(1);

    for(let i=n;i>=1;i--){
        res *= BigInt(i)
    }
    return res.toString()
}

console.log(extraLongFactorial(45));