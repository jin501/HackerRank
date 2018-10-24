// Find pairs in an integer array whose sum is equal to 10

// time - O(n^2), space - O(n)
const pairsSummingTen = (arr) => {
  pairsOfTen = []
  for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
      if(i !== j && arr[i]+arr[j] === 10){
        pairsOfTen.push([arr[i], arr[j]])
      }
    }
  }
  return pairsOfTen
}

// time - O(n), space - O(2n)

const pairsSummingTen = (arr) => {
  let pairs = [], differences = {}

  for(let i=0; i<arr.length; i++){
    if(differences[arr[i]]){
      pairs.push([arr[i],differences[arr[i]]])
      delete differences[arr[i]];
    }else{
      let diff = 10 - arr[i]
      differences[diff] = arr[i]
    }
  }
  return pairs
}


pairsSummingTen([1,2,5,5,5,9])
