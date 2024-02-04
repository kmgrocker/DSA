/* 
* given a sorted array of size n find the element 't' in the array if t is found then return the index else -1
*/

// ! the binary  search applied on sorted array only 

let test1 = [-5,2,4,6,10] 

/* 
* pseudo code  

* if array is empty return -1

* make sure input array is sorted  if not then sort it 

* directly check if last item in array is less than search element then also return -1 since array is sorted (low to high) and lat element will be highest and if it is less than search element then it is for sure than search element is not in array 

* find the middleIndex of the array 
* check if search element is at middle element if found return the midindex no need to further check 

* check if the search value is less than value at midIndex if so it will be in first half (sorting must be low to high) so no need to check in second half .since target element is in firt half we will again repeat the same process for this collection find the midIndex check if it is equal to search element and then compare less or great with midIndex and so on basically it will be recursive approach

* if the search value is greater than midIndex then run loop in second half 

* finally  return -1 if above nothing give result 
*/


/* 
*  [-5,-4,-6,8,2,4,1,6] => 8
*  [-5,-4,-6,8,2,4,1,6,10] => 9 
*/


//! not best solution since the process of finding midIndex and again reducing the search collection is happening only once here 

const binarySearch = (arr,n) => {
   if(arr.length===0) return -1;
   let sortedArray = arr.sort((a,b)=>a-b);
   console.log('sorted Array',sortedArray)
   let midIndex = sortedArray.length % 2 === 0 ? (sortedArray.length/2)-1:(sortedArray.length-1)/2
   console.log('midIndex',midIndex)
   if(sortedArray[sortedArray.length-1]<n) return -1;
   if(sortedArray[midIndex]===n) return midIndex;

   if(n<sortedArray[midIndex]){
      // loop in first half
      console.log('fisrt half loop running')
      return sortedArray.indexOf(n,0)
   }
   if(n>sortedArray[midIndex]){
      // loop in second half 
      console.log('second half loop running')
      return sortedArray.indexOf(n,midIndex)
   }
}

// console.log(binarySearch([-5,-4,-6,8,2,4,1,6],8))

// console.log(binarySearch([-5,-4,-6,8,2,4,1,6],11)) // it will exist by checking the last digit 

// console.log(binarySearch([-5,-4,-6,8,2,4,1,6,10],4))

// console.log(binarySearch([-5,-4,-6,8,2,4,1,6,10],-4))


// ! every iteration we are reducing the input size by 1/2 so BIG-O => O(logn)

const binarySearchBetter = (arr,n)=>{
   if(arr.length===0) return -1;
   let sortedArray = arr.sort((a,b)=>a-b);
   console.log('sorted Array',sortedArray)
  
   
   let leftMostIndex = 0;
   let rightMostIndex = arr.length-1

   if(n>sortedArray[rightMostIndex] || n<sortedArray[leftMostIndex]) return -1;
    // in sorted array from low to hight check if target is less than first element or greater than last element then return -1 since it does not lie in the array 
   
   while(leftMostIndex<=rightMostIndex){
      let midIndex = Math.floor((leftMostIndex+rightMostIndex)/2);
      console.log('midIndex',midIndex)   
      if(n===sortedArray[midIndex]) return midIndex;
      if(n<sortedArray[midIndex]){
         rightMostIndex = midIndex-1
      }else{
         leftMostIndex = midIndex+1
      }
   }
   return -1;
}

console.log(binarySearchBetter([-5,-4,-6,8,2,4,1,6,10],-4))
console.log(binarySearchBetter([-5,-4,-6,8,2,4,1,6],8))

// ! above code is final for binary search remember to use  <= between left and right Idx 


// binary serach => O(logn) 

// function binarySearch(arr,n){
//    // array will be sorted 
//    if(arr.length===0) return -1;
//    let leftIdx = 0;
//    let rightIdx = arr.length-1;
 
//     // less than equal is importent below example will fail 
//    while(leftIdx<=rightIdx){
//        let midIdx = Math.floor((leftIdx+rightIdx)/2)
//        if(n===arr[midIdx]){
//            return midIdx
//        }
//        if(n<arr[midIdx]){
//            rightIdx = midIdx-1
//        }
//        if(n>arr[midIdx]){
//            leftIdx = midIdx+1
//        }
//    }
//    return -1
// }

// console.log(binarySearch([-5,-4,1,2,8,22,77,214],8))