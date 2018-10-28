// Find the only element in an array that only occurs once.

// time - O(2n), space - O(nm)
const onlyElOccursOnce = (arr) => {
  let occur = {}, result;
  for(let i=0, l = arr.length; i < l; i++){
    if(occur[arr[i]]){
      occur[arr[i]]++
    }else{
      occur[arr[i]] = 1
    }
  }

  const entries = Object.entries(occur)
  for (const [el, count] of entries) {
    if(count === 1){
      return el
    }
  }
}

onlyElOccursOnce([2,2,2,4,4,1,3,3,3,5])
