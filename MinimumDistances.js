function minimumDistances(a){

    const repeatingIndexes = a.reduce((acc, currentValue, currentIndex, arr) => {
        const lastIndex = arr.lastIndexOf(currentValue);
        if (lastIndex !== currentIndex) {
          acc.push( (lastIndex-currentIndex) );
        }
        return acc;
      }, []);
      
      console.log(Math.min(...repeatingIndexes));
}
console.log(minimumDistances([7,1,3,4,1,7]));