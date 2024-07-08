function nonDivisibleSubset(s,k){

    let n= s.length;
    let f = new Array(k).fill(0);

    for(let i=0; i<n;i++){
        f[s[i]%k]++;
    }
    if(k%2===0){
        f[k/2]=Math.min(f[k/2],1);
    }

    let res = Math.min(f[0],1);
    for(let i=1;i<=k/2;i++){
        res += Math.max(f[i],f[k-i])
    }
    return res



}

console.log(nonDivisibleSubset([278 ,576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436],7));