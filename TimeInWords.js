function timeInWords(h,m){
    let str='';
    let words=['one','two','three','four','five','six','seven','eight','nine',
                'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen',
                'nineteen','twenty','twenty one','twenty two','twenty three','twenty four','twenty five',
                'twenty six','twenty seven','twenty eight','twenty nine']
    const times={ '0':"o' clock",'15':"quarter past",'30':"half past",'45':"quarter to" }
    if(times[m]){
        if(m===0){
            return words[h-1]+' ' + times[m];
        }else if(m===45){
            return times[m]+ ' ' +words[h]
        }else{
            return times[m]+' '+ words[h-1]
        }
    }else if(m<2){
            return words[m-1]+' minute past  '+words[h-1];
        }
    else if(m<30){
        return words[m-1]+' minutes past  '+words[h-1];
    }else if(m>58){
        return words[60-parseInt(m)-1]+' minute to '+ words[h];
    }
    else if(m>30){
        return words[60-parseInt(m)-1]+' minutes to '+ words[h];
    }

}

console.log(timeInWords(7,59))