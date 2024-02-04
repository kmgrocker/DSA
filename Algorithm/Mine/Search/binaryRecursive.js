// binary recursive search 

function binaryRecursive(arr,target,leftIdx,rightIdx){
    console.log('jj')
    if(arr.length===0) return -1;
    if(leftIdx > rightIdx){
        return -1
    }
    let isAscending = true ;
    if(arr[0]>arr[arr.length-1]){
        isAscending = false
    }
    // let leftIdx = left;
    // let rightIdx = arr.length-1
    let midIdx = Math.floor(leftIdx+(rightIdx-leftIdx)/2)
    if(target === arr[midIdx]){
        return midIdx
    }
    // console.log(target,midIdx)
    else if(target<arr[midIdx]){
        if(isAscending){
            return  binaryRecursive(arr,target,leftIdx,midIdx-1)
        }else{
            return  binaryRecursive(arr,target,midIdx+1,rightIdx)
        }
    }

    else if(target>arr[midIdx]){
        if(isAscending){       
            return binaryRecursive(arr,target,midIdx+1,rightIdx)
        }else{
            return binaryRecursive(arr,target,leftIdx,midIdx-1)
        }
    }
    else{
        return -1
    }
    
   
}

let testArr1 = [10,8,6,4,2,1,-4,-5,-6]
let testArr2 = [-6,-5,-4,1,2,4,6,8,10]

let testArrlarge=[]

// for(let i=0;i<1000000;i++){
//     testArrlarge.push(i)
// }
//desecending case 
for(let i=1000000;i>0;i--){
    testArrlarge.push(i)
}

console.log(binaryRecursive(testArr1,-4,0,testArr1.length-1))
console.log(binaryRecursive(testArr2,-4,0,testArr1.length-1))

// in case of even element is not present in the collection loop has to check if we know the array is sorted based on sorting we can directly check that given element is in beyond the collection by comparing first and last index 

/* 
* for example if we are searching  12 and array is sorted in ascending then if last element is less than 12 means there is no possible way that any thing equal to 12 can be found inside 

* in case of descending if first index is less than 12 then there is no chance that it will be inside array
*/
// console.log(binaryRecursive(testArr2,12,0,testArr1.length-1))
console.log(binaryRecursive(testArrlarge,-8,0,testArrlarge.length-1))


function binaryRecursiveOther(arr,target,leftIdx,rightIdx){
    console.log('running')
    let isAscending = true;
    if(arr[0]>arr[arr.length-1]){
        isAscending = false
    }

    if(arr.length===0){
        return -1;
    }
    if(leftIdx > rightIdx){
      return -1
    }
    let midIdx = Math.floor(leftIdx+(rightIdx-leftIdx)/2);
    if(isAscending){
        if(target > arr[rightIdx]){
            return -1
        } 
        if(target < arr[leftIdx]){
            return -1
        }
    }else{

        if(target < arr[rightIdx]){
            return -1
        } 
        if(target > arr[leftIdx]){
            return -1
        } 
        }


  
    if(target === arr[midIdx]){
        return midIdx
    }
    // console.log(target,midIdx)
    else if(target<arr[midIdx]){
        if(isAscending){
            return  binaryRecursiveOther(arr,target,leftIdx,midIdx-1)
        }else{
            return  binaryRecursiveOther(arr,target,midIdx+1,rightIdx)
        }
    }

    else if(target>arr[midIdx]){
        if(isAscending){       
            return binaryRecursiveOther(arr,target,midIdx+1,rightIdx)
        }else{
            return binaryRecursiveOther(arr,target,leftIdx,midIdx-1)
        }
    }
    else{
        return -1
    }
}  

console.log(binaryRecursiveOther(testArrlarge,-8,0,testArrlarge.length-1))

// console.log(binaryRecursiveOther(testArrlarge,-3,2,testArrlarge.length-1))
