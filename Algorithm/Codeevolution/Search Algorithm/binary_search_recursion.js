
/* 

* left index = 0 
* right index = arr.length-1 
* midindex = left+right/2 
[-5,-4,-6,8,2,4,1,6,10] 
*/

// ! BIG-O => is still O(logn) since with every iteration search input is getting reduced by half based on left and right index

function recursiveBinarySearch(arr,target){

   let sortedArray = arr.sort((a,b)=>a-b);
  //  let leftIndex = 0;
  //  let rightIndex = arr.length-1;
  if(target>sortedArray[sortedArray.length-1] || target<sortedArray[0]) return -1;
   return search(sortedArray,target,0,sortedArray.length-1)
}

function search(arr,target,leftIndex,rightIndex){
  console.log('ar',arr)
  if(leftIndex > rightIndex) {
    return -1
  }
  console.log('rightindex',rightIndex)
  console.log('leftindex',leftIndex)
  let midIndex = Math.floor((leftIndex+rightIndex)/2) 
  console.log('midIndex',midIndex)
  if(target === arr[midIndex]) {
    console.log('fffff')
    return midIndex
   };
  if(target<arr[midIndex]){
  //  console.log('rightindex',rightIndex)
   return search(arr,target,leftIndex,midIndex-1)
  } else {
  //  console.log('left index',leftIndex);
   return search(arr,target,midIndex+1,rightIndex)
 }
 }

// console.log(recursiveBinarySearch([-5,-4,-6,8,2,4,1,6,10],-4))

console.log(recursiveBinarySearch([-5,-4,-6,8,2,4,1,6],8))

//! handling the out of scope number at with last and fisrt position logic without touching search loop 

// console.log(recursiveBinarySearch([-5,-4,-6,8,2,4,1,6],11))
// console.log(recursiveBinarySearch([-5,-4,-6,8,2,4,1,6],-7))

