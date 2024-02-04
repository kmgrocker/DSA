// binary search logic given in codeevolution channel and our binary search wrong file won,t work 

// what we can  do we can find which way it is sorted 

// ascending way => [1,2,3,4]

// desecending way => [4,3,2,1]  


function binarySearch(arr,target){
    // checking if length === 0 return -1 
    if(arr.length===0){
        return -1
    }
    let isAscendingOrder = true;
    let leftIdx = 0;
    let rightIdx = arr.length-1
    // assuming its soreted array because then only binary search work 

    // deciding which kind of sorting is that 

    if(arr[leftIdx]>arr[rightIdx]){
       isAscendingOrder = false
    }

    while(leftIdx<=rightIdx){

      /* 
      * mid = start + (end - start)/2

     * mid = (start + end)/2 can potentially cause overflow. I think it may even fail certain
      */
      // https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html 

        let midIdx = Math.floor((leftIdx+rightIdx)/2)

        if(target === arr[midIdx]){
            return midIdx
        }
        if(target<arr[midIdx]){
           if(isAscendingOrder){
             rightIdx= midIdx-1
           }else{
              leftIdx = midIdx+1
           }
        }
        if(target>arr[midIdx]){
            if(isAscendingOrder){              
                leftIdx = midIdx+1
              }else{
                rightIdx= midIdx-1
              }
        }
    }
    return -1
    
}


console.log(binarySearch([10,8,6,4,2,1,-2,-4,-5],2))
console.log(binarySearch([-11,-6,-2,1,3,8,22,35],35))


console.log(binarySearch([10,8,6,4,2,1,-4,-5,-6],-4))
console.log(binarySearch([-6,-5,-4,1,2,4,6,8,10],-4))


console.log(binarySearch([-6,-5,-4,1,2,4,6,8],8))
console.log(binarySearch([8,6,4,2,1,-4,-5,-6],2))