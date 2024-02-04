/* 
* problem 
* given an array of integers sort the array 
* const arr = [-5,-4,-6,8,2,4,1,6,10] 
* bubbleSort (arr) => should return [ -6,-5,-4,1,2,4,6,8,10]
*/

// console.log([-5,-4,-6,8,2,4,1,6,10].sort((a,b)=>a-b))

// ! it is crucial to note that bubble sort is poor algorithm for sorting it should never be used we are just exploring how it work 

/* 
* how bubble sort work 
* 

*/



let loopCounter = 0

//! mine imlementattion 
const bubbleSortMine = (arr) =>{

     for(let i=0;i<arr.length;i++){
        loopCounter+=1
        //   console.log(arr)
        //   console.log(arr[i])
        //   console.log(arr[i+1])
        if(arr [i] > arr[i+1]){
             let leftOne = arr[i]
             arr [i]  = arr[i+1]
             arr[i+1] = leftOne   
        bubbleSortMine(arr);
       }
     }
     console.log('number of time loop ran',loopCounter)
     return arr
}

// console.log(bubbleSortMine([-5,-4,-6,8,2,4,1,6,10]))
// console.log(bubbleSortMine([-6,-5,-4,1,2,4,6,8,10]))

// ! after comparing the log it is evident that below logic is more efficient rather than above recursive approach

//! BIG-O => O(n^2) loop inside loop

function bubbleSortOther(arr){
let swapped;
  do{    
    loopCounter+=1
    swapped = false
    console.log('loop ran this much time',loopCounter)
    for(let i=0;i<arr.length-1;i++){
        console.log('rrrrrrrmm')
        if(arr[i]>arr[i+1]){
           let leftOne = arr[i]
           arr[i] = arr[i+1]
           arr[i+1] = leftOne
           swapped = true
        }
     }
  }while(swapped)
//   console.log('loop ran this much time',loopCounter)
  return arr;
}

// console.log(bubbleSortOther([-5,-4,-6,8,2,4,1,6,10]))

// console.log(bubbleSortOther([-5,-4,-6,8,2,4,1,6,10]))

// console.log(bubbleSortOther([-6,-5,-4,1,2,4,6,8,10]))

// ! repeat and test the logic if we need in decesnding order (higher to lower)


