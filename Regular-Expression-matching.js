
function isMatch(s,p){
    var index = 0;
const pattern = p.split("").map(function(char, index) {
   if (char === "*") {
       return p[index-1];
   }
   return char;
}).forEach(function(char) {
  if(char === s[index] || char === ".") {
    index++;
  }
});
return index === s.length;
  }

  console.log(isMatch("abc",".abc"));