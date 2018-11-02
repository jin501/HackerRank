// Find all #s that have a greater occurance than k in array

// space: O(2n), time: O(nm)
const greatestOccurences = (arr, k) => {
  let greater = [], obj = {}
  for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]] += 1
    }else{
      obj[arr[i]] = 1
    }
  }

  const occurances = obj[k]
  for(let key in obj){
      if(obj[key] > occurances){
        greater.push(key)
      }
  }

  console.log(greater)
}
