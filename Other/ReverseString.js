// Reverse a String iteratively and recursively

const reverseString = (str) => {
  let reversed = ""
  for(let i=str.length-1; i >= 0; i--){
    reversed = reversed+str[i]
  }
  return reversed
}

const reverseString = (str) => {
  if(str.length === 1){
    // reversed += str
    return str
  }else{
    // reversed += str[str.length-1]
    // s = str.slice(0,-1)
    return str[str.length-1] + reverseString(str.slice(0,-1))
  }
}

reverseString("hello!")
