function aVeryBigSum(ar) {
    // Write your code here
let res=BigInt(1);
    res = BigInt(ar.reduce((acc,cur)=>(acc+cur),0));
    return res.toString()
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))