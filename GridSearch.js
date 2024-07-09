
function gridSearch(G, P) {
    // Write your code here
let n=G.length;
    let m=P.length;
    
    for(let i=0;i<=n-m;i++){
        for(let j=0;j<=G[i].length-P[0].length;j++){
            let check=true;
            for(let k=0;k<m;k++){
                if(G[i+k].substring(j,P[0].length+j)!==P[k]){
                    check=false;
                    break;
                }
            }
            if(check){
                return 'YES'
            }
        }
    }
    return 'NO'
}

let G=['7283455864','6731158619'
    ,'8988242643','3830589324','2229505813','5633845374',
    '6473530293'
    ,'7053106601',
    '0834282956'
    ,'4607924137'];
    let P=['9505','3845','3530']

    console.log(gridSearch(G,P));