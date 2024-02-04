

// linear search 

/* 
* given an array of size n find the target element 't' find the index of 't' in the array.return -1 if the target element is not found 

* arr = [-5,2,10,4,6] = 10 -> should return 2

*/

/* 
* test cases 
* 
*/
let data1 = [-5,2,10,4,6,10]

let data2 = []

for(let i=0;i<1000000;i++){
    data2[i]=i+1
}

console.log(data2.length)


//*  BIG-O => O(n)
const findTheElementByIndexOf =(arr,n)=>{
     console.log(performance.now())
     console.time('indexOf execution')
     let result = arr.indexOf(n)
     console.log(performance.now())
     console.timeEnd('indexOf execution')
     return result;
}

// console.log(findTheElementByIndexOf(data1,10))

console.log(findTheElementByIndexOf(data2,97582589))

//* BIG-O => O(n)
const findTheElementLinear = (arr,n)=>{
  for(let i=0;i<arr.length;i++){
    if(i===n){
        return i
    }
  }
  return -1
}