// Find the common elements of 2 int arrays


// Time - O(nm), Space - O(nm)
const commonElofTwoArrays = (array1, array2) => {
  let common = [], occur={};
  for(let i =0, l=array1.length; i<l; i++){
    if(occur[array1[i]]){
      occur[array1[i]]++
    }else{
      occur[array1[i]] = 1
    }
  }
  for(let i =0, l=array2.length; i<l; i++){
    if(occur[array2[i]]){
      common.push(array2[i])
    }
  }

}

commonElofTwoArrays([1,2,4,3,3],[2,4,5])
