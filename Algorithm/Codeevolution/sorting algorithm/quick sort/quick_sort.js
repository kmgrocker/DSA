/* 
 * take a pivot point in the array and compare every element with pivot the element less than pivot will be going in left array and elememt greater than pivot will go in right array again repeat process for the left and right array assuming the pivot will be same 
*/

/* 
! cross check the working if array has duplicate  value 
*/

function quickSort(arr){
    console.log(arr);
    if(arr.length<=1) return arr
    let pivotPoint = arr[arr.length-1]
    let leftArr = []
    let rightArr = []
    for(let i=0;i<arr.length-1;i++){
     if( arr[i] < pivotPoint){
        leftArr.push(arr[i])
     }else{
        rightArr.push(arr[i])
     }
    }
    
    return [...quickSort(leftArr),pivotPoint,...quickSort(rightArr)]
}

//! worst case time complexity  - O(n^2) if array is sorted already we ended  up being devided in left half the whole array and right half empty and run recusrsion on every smaller chunk 

// ! if array is unsorted 
//! average case time complexity - O(nlogn) => O(logn) since every time we are reducing the input size in recursion and O(n) since we are running loop for each elememt so combining both O(nlogn)

console.log(quickSort([-5,-4,-6,8,2,4,1,6,10]))

console.log(quickSort([1,3,6,-2,-7,8,6,22,11,17,2,148,-9,-11,2,6]))