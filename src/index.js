var array;

function min(x) {
  var minResult;
  if (x === undefined) {
    return;
  }
  for (var i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number' && !isNaN(x[i])) {
      if (minResult === undefined || x[i] < minResult) {
        // console.log(typeof minResult === undefined);
        minResult = x[i];

      }
    }
  }
  return minResult;
}
console.log(min(array));

function max(x) {
  var maxResult;
  if (x === undefined) {
    return;
  }
  for (var i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number' && !isNaN(x[i])) {
      if (maxResult === undefined || x[i] > maxResult) {
        maxResult = x[i];

      }
    }
  }
  return maxResult;
}
console.log(max(array));

function sum() {
  var sumResult = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i]) && typeof arguments[i] === 'number') {
      sumResult = sumResult + arguments[i];
    }
  }
  return sumResult;
}
console.log(sum(10, 45, 55, 100, 66, 4, 99));