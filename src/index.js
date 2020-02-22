module.exports = function reverse (n) {
  if (n < 0) n = n*-1
  let a = String(n).split("");
  let n1 = "";
  for (let i = a.length -1; i >= 0 ; i--){
      n1 = n1 + a[i];
  }
  return (n1);
}
