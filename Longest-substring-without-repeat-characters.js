//using set

/*function lengthOfLongestSubstring(s){
    let left=0;
    let right=0;
    let newSet = new Set();
let max =0;
for(let i=0;i<s.length;i++){
    if(newSet.has(s[i])){
        newSet.delete(s[left]);
        left++;
    }else{
        newSet.add(s[right]);
        right++;
        max = Math.max(max,newSet.size);
    }
}
return max
}*/


//using hashmap

function lengthOfLongestSubstring(s){
    console.log(s)
    let i=0;
    let j=0;
    let hashMap={};
    let max =0;

    while(j<s.length){
        let char=s[j];
        if(hashMap[char]){
            i=Math.max(i,hashMap[char]);
        }
        hashMap[char]=j+1;
        max = Math.max(max,j-i+1);
        j++;
    }
    return max
}
console.log(lengthOfLongestSubstring('abcabcbb'));