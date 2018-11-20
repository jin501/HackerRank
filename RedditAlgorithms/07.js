// Implement binary search of a sorted array of integers

const binarySearch = (array, int) => {
  let left = 0, right = array.length-1
  let mid = left + Math.floor((right - left) / 2)

  while(left <= right){
    if(int === array[mid]){
      return mid
    }

    if(int > array[mid]){
      left = mid + 1
    }else{
      right = mid - 1
    }
    mid = left + Math.floor((right - left) / 2)
  }
  return "not found"
}

// Recursion
const binarySearch = (arr, int, left=0, right=(arr.length-1)) => {
  let mid = Math.floor(((right - left) / 2) + left)
  if(int > arr[arr.length-1]){
    return "not found"
  }
  if(arr[mid] === int){
    return mid
  }
  if(int > arr[mid]){
    return binarySearch(arr,int,mid+1,right)
  }else{
    return binarySearch(arr,int,left,right-1)
  }
}

// Recursion, switch
const binarySearch = (arr, int, left=0, right=(arr.length-1)) => {
  let mid = Math.floor(((right - left) / 2) + left)
  switch (true) {
    case int > arr[arr.length-1]:
      return "not found"
    case arr[mid] === int:
      return mid
    case int > arr[mid]:
      return binarySearch(arr,int,mid+1,right)
    case int < arr[mid]:
      return binarySearch(arr,int,left,right-1)
  }
}
