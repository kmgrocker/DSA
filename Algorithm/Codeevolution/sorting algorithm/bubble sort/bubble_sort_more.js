function bubbleSort(arr){
    let swap;
    if(arr.length<=1){
      return arr
    }
    do{
       swap = false;
       for(let i=0;i<=arr.length-1;i++){
          // logic for increasing order sort 
  
       /*    if(arr[i]>arr[i+1]){
              let left = arr[i];
              arr[i] = arr[i+1];
              arr[i+1] = left;
              swap = true;
          } */
  
          // logic for decreasing order 
  
          if(arr[i+1]>arr[i]){
              let left = arr[i+1];
              arr[i+1] = arr[i]
              arr[i] = left;
              swap = true
          }
       }
    }
    while(swap)
    return arr;
  }