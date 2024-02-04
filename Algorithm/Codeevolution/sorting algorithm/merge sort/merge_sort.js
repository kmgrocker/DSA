function mergeSort(arr){
    // step one seprate each element in to array 
    
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor((arr.length)/2)
    // console.log('mid',mid)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid,arr.length)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
  
    // divideArray(arr)
}

function merge(leftArr,rightArr){
    let result = []
    // console.log(leftArr)
    // console.log(rightArr)
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<=rightArr[0]){
        result.push(leftArr.shift())
    }else{
        result.push(rightArr.shift())
    }
  }
    return [...result,...leftArr,...rightArr]
}

console.log(mergeSort([-5,-4,-6,8,2,4,1,6,10]))