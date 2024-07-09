function minimumDistances(a){

    const repeatingIndexes = a.reduce((acc, currentValue, currentIndex, arr) => {
        const lastIndex = arr.lastIndexOf(currentValue);
        if (lastIndex !== currentIndex) {
          acc.push( (lastIndex-currentIndex) );
        }
        return acc;
      }, []);
      
      return (Math.min(...repeatingIndexes));
      
} 
//another solution
/* function minimumDistances(a){
    let res=[];
    for(let i=0;i<a.length;i++ ){
        let lastIndex=a.lastIndexOf(a[i]);
          if(lastIndex!==-1 && (lastIndex-i)>0){
           res.push(lastIndex-i)
           continue
          }
    }
    console.log(res)
if(res.length>0){
    return Math.min(...res)
    }
    else{
        return -1
    }
} */
console.log(minimumDistances([7,1,3,4,1,7]));