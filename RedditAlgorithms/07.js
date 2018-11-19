// Implement binary search of a sorted array of integers

const binarySearch = (array, int) => {
  let left = 0, right = array.length-1
  let mid = Math.floor(array.length / 2)
  console.log(left, right, mid)

  while(left <= right){
    if(int === array[mid]){
      return mid
    }
    if(int > array[mid]){
      left = mid + 1
      mid = left + Math.floor((right - left) / 2)
      console.log("left", left, right,  mid)
    }else{
      right = mid - 1
      mid = Math.floor((right+left)/2)
      console.log("right", left, right,  mid)
    }
  }
  return "not found"
}

binarySearch([0,1,2,3,4,5,6,7,8], 12)
