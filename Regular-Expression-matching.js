
function isMatch(s,p){
    var index = 0;
    console.log(p.split(""));
const pattern = p.split("").map(function(char, index) {
    console.log("1",char,index)
   if (char === "*") {
    console.log("2",p[index-1])
       return p[index-1];
   }
   return char;
}).forEach(function(char) {
    console.log("in for loop",char,index)
  if(char === s[index] || char === ".") {
    index++;
    console.log("index",index);
  }
});
return index === s.length;
  }

  console.log(isMatch("abc",".abc"));