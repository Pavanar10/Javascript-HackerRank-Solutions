function evenFactorial(n) {
    //1 2 3 5 8 13 21 34 55 89
    let previous =BigInt(1);
    let current =BigInt(2);
    let sum=BigInt(0);
    if(n<1)
        return n
    if(n===1)
        return 2
    while (current < n) {
        if (current % 2n === 0n)
            sum += BigInt(current);

        current = BigInt(previous + current);
        previous = current - previous;
    }

    console.log(sum.toString())
    return sum.toString()
}

console.log(evenFactorial(100));