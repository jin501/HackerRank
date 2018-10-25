// Given 2 integer arrays, determine if the 2nd array is a rotated version of the 1st array. Ex. Original Array A=[1,2,3,5,6,7,8] Rotated Array B=[5,6,7,8,1,2,3]


// time - O(nm), space - O(nm)
const rotateArr = (a1, a2) => {
  let nums = {};
  for(let i=0; i < a1.length; i++){
    (nums[a1[i]]) ?
      nums[a1[i]]++ :
      nums[a1[i]] = 1
  }
  for(let i=0; i < a2.length; i++){
    if(nums[a2[i]]) {
      (nums[a2[i]]==1) ?
        delete nums[a2[i]] :
        nums[a2[i]]--
    } else {
      nums[a2[i]] = 1
    }
  }

  return (!Object.keys(nums).length) ?
    true :
    false
}
