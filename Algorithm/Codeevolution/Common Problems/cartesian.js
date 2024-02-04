/* 
* given two finite non-empty sets , find the cartesian product 

* in mathematics specifically set theory ,the cartesian product of two sets A and B , denoted A*B , is set of all ordered pairs (a,b) where a is in A and b is in B 

A = [1,2] , B = [3,4] => A*B = [[1,3],[1,4],[2,3],[2,4]]

A = [1,2] , B = [3,4,5] => A*B = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
*/

// ! BIG-O => O(m*n) since both array could be of different size if they are of same size then  it will become O(n^2) automatically

function cartesian(arr1,arr2){
    let targetArr = [];
     for(let i=0;i<arr1.length;i++){
         for(let j=0;j<arr2.length;j++){
             targetArr.push([arr1[i],arr2[j]])
         }
     }
     return targetArr;
}

// ! point to note if planning to improve the code that target array length always will be multiplication of both array length

console.log(cartesian([1,2],[3,4]))

console.log('**** space ****')
console.log(cartesian([1,2],[3,4,5]))

console.log('**** space ****')
console.log(cartesian([1,2,6],[3,4,5,2]))