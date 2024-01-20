/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let i = 0
  if(x<=3) return x;
  let c = 2;
  let p = 1;
  let sum = 0;
  while(i<(x-2)){
  sum = c+p;
  p = c;
  c = sum;
    i++
  }
  return c
};

console.log(mySqrt(6))
