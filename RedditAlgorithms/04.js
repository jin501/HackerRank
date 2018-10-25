// Write fibbonaci iteratively and recursively (bonus: use dynamic programming)

// [0, 1, 1, 2, 3, 5, 8, 13, 21]

// Linerarly
const fibonacci = (n) => {
  let a = 1, b = 0, temp;
  // for(let i=2; i < n+1; i++){
  //   temp = a; //temporarily storing a so that b can take this # after
  //   a = a + b; //a takes next value in seq
  //   b = temp;//takes the current value of a
  // }
  while(n>=0){
    temp = a;
    a = a + b;
    b = temp;
    n--
  }
  return b
}

// Recursively
function fibonacci(n){
  if(n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
