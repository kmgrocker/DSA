// find that a collection has pair which sum is equal to given number 

// hasPairSum([1,2,5,4,7],9) => true 
// hasPairSum([1,2,5,4,7],4) => false 

// brute forece approach => O(n^2) 
function hasPairSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return true
            }
        }
    }
    return false
}

console.log(hasPairSum([1,2,5,4,7],9))
console.log(hasPairSum([1,2,5,4,7],4))


// better approach  => O(n)

function hasPairSumBetter(arr,target){
    let mySet = new Set();
    for(let i=0;i<arr.length;i++){
        if(mySet.has(arr[i])){
            return true
        }
        mySet.add(target-arr[i])
    }
    return false
}

console.log(hasPairSumBetter([1,2,5,4,7],9))
console.log(hasPairSumBetter([1,2,5,4,7],4))