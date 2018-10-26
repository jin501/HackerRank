// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  let count=0, total=0;
  let add = n%s.length
  let multiply = Math.floor(n/s.length)

  for(let i=0; i<s.length; i++){
    if(s[i]==="a"){
      console.log("HI",add, s[i],i)
      count++
    }
    if(add>0 && s[i]==="a"){
      console.log(add, s[i],i)

      total++
    }
    if(add>0){
      console.log(add,i)
      add--
    }

  }
  total = total + (count * multiply)
}

// exceeded timeout
function repeatedString(s, n) {
  let l = 0, count = 0;

  if(s.length === 1){
    return (s[0] === "a") ?
    n :
    0
  }

  for(let i=0; i<n; i++){
    if(s[l]==="a"){
      count++
    }
    if(l===s.length-1){
      l = -1
    }
    l++
  }
  return count

}

// function repeatedString(s,n) {
//   diff = n-s.length;
// let repeats = Math.ceil(diff/s.length);
//
// while(repeats > 1) {
//   s = s+s
//   console.log(s,s.length, repeats)
//   repeats--
// }
//
// for(let i=0; i<n; i++){
//   if(s[i]==="a"){
//     count++
//   }
// }
// }

//first loop s and count occurances
// x = # of occurances
// times = Math.floor(n/a.length)
// x * times
// add = n%a.length
