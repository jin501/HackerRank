// Find the most frequent integer in an array

// Unordered, space- O(2n), time- O(n)

function mostFreq(arr) {
  let obj = {}, mostFreq = 0, num = [];
  arr.forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }

    if (obj[el] > mostFreq) {
      mostFreq = obj[el];
      num = [el];

    } else if (obj[el] === mostFreq) {
      num.push(el);
    }
  });

  console.log(num)
}

// Unordered space - O(1)
const mostFrequent = (array) => {
  let count = 1;
  let most = [0, array[1]]
  for(let i=1; i < array.length; i++){
    if(most[1] !== array[i]){
      count = 1
    }
    if(array[i-1] === array[i]){
      count++

      if(count >= most[0]){
      most[0] = count
      most[1] = array[i]
      }
    }
  }
  console.log("most", most);
}




// 
// mostFrequentSorted = (array) =>{
//   num = null;
//   most = 0;
//   current = null;
//   occurences = 1;
//   array.forEach(int => {
//     if(current !== int){
//       most < occurences ? num = current : num = num
//       most < occurences ? most = occurences : most = most
//       occurences = 1;
//       current = int;
//     }
//     else{
//       occurences += 1;
//     }
//   })
//
//   num ? num = num: num = current;
//   console.log(num)
// }
//
// mostFrequentSorted([1,2,2,3,3])
//
// //O(1) space, O(n^2) time
// mostFrequentUnsorted = (array) => {
//   most = 0;
//   num = null;
//   occurences = 0;
//
//   array.forEach((firstNum, idx) => {
//     array.forEach((secondNum, idxTwo) => {
//       if (firstNum === secondNum && idx !== idxTwo){
//         occurences += 1;
//       }
//     })
//   most < occurences ? num = firstNum : num = num
//   most < occurences ? most = occurences : most = most
//   occurences = 0;
//   })
//
//   return num
// }
// mostFrequentUnsorted([1,2,2,2,3,3])
//
// //O(N) space, O(N) time
// mostFrequentUnsortedTwo = (array) => {
//    most = 0;
//    num = null;
//    nums = {};
//    array.forEach(int => {
//      if(nums.hasOwnProperty(int)){
//        nums[int] += 1;
//      }
//      else{
//        nums[int] = 1;
//      }
//     nums[int] > most ? num = int : num = num
//     nums[int] > most ? most = nums[int] : most= most
//    })
//
// return num
// }
//
// mostFrequentUnsorted([1,2,2,2,3,3])
