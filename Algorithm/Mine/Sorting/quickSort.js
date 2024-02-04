function quickSort(arr,sortType){
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let leftArr = [];
    let rightArr = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            sortType === 'inc' ? leftArr.push(arr[i]) : rightArr.push(arr[i])
        }else{
            sortType === 'inc' ? rightArr.push(arr[i])  : leftArr.push(arr[i])
        }       
    }
    return [...quickSort(leftArr,sortType),pivot,...quickSort(rightArr,sortType)]
}

console.log(quickSort([-5,-4,-6,8,2,4,1,6,10],'inc'))

console.log(quickSort([1,3,6,-2,-7,8,6,22,11,17,2,148,-9,-11],'dec'))

console.log(quickSort([-11,-6,-2,1,3,8,22,35],'dec'))