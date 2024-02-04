let arr = [5,2,'ram',function(){return 'data structure'},6]

// ! looping throgh Array 

for(let item of arr){
    console.log(item)
}

// access element //! O(1)

console.log(arr[0]) // begining 
console.log(arr[arr.length-1]) // last
console.log(arr.at(-1)) // last

//! push => O(1) => adding elem at the end of the array 

arr.push(11)

//! pop  => O(1) => removing elem from the end of the array 

arr.pop()


//! unshift => O(n) => adding element at the begining of the array
// its BIG-O will be O(n) because every elememt has to adjust the index  

arr.unshift(0)

//! shift  => O(n)

arr.shift()


console.log(arr);

// ! below all are O(n) 

//filter 

// reduce 

// map 

// concat 

// slice 

// splice 


