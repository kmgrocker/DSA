/* 
* how insertion sort work 

*/

// ! BIG-O => O(n^2)
function insertionSort(arr){
    let sortedElement = arr[0]// sorted elememt 
    //!  [-6,20,8,-2,4]

    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1; // sorted element side index it will always be less than number to insert index 
        // sorted element will be more and we need to loop to compare with every number to insert 

        while(j>=0 && arr[j]>numberToInsert){
             arr[j+1] = arr[j]
            j = j - 1; // to go backward in loop on sorted sided
        }
       arr[j+1] = numberToInsert
    }
    return arr;
}


console.log(insertionSort([-5,-4,-6,8,2,4,1,6,10]))