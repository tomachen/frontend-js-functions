var array = [2,3,1,null, -1, -15];
function min(x) {
   var minResult;
  
  for(var i=0; i < x.length; i++) {
    if (typeof(x[i] === 'number')) {
        if ( i === 0 || x[i] < minResult) {
      minResult = x[i];
        }
      }
    }
   return minResult;
}
console.log(min(array));

var a = [0, 45, 55, 100, 66, 4, 99], sum = 0;
for (var i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum); 