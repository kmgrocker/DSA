//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const set = new Set() // we can pass an array it is optional 

const newSet = new Set([1,2,3,1])// it will return unique value 

console.log(newSet)

// even while adding if set has the value same as new then it will discard the incoming 

//!  note the comparsion is shallow means it will be considered same if the reference is same not the value in case of non primitive 



newSet.add(function(){return 2});
newSet.add(function(){return 2});

newSet.add(3);

let testObj = {name:'john'}

newSet.add(testObj);
newSet.add(testObj);// second time ignored 

newSet.add({name:'john'}) // will be considered a new obj in memory so will be added


// to delete a value

newSet.delete(2)

// check a value exist or not 

console.log(`set has ${newSet.has(1)}`)

// size of the set 

console.log(`size of the set- ${newSet.size}`)

// can clear the set 

// newSet.clear()

for(let i of newSet){
    // console.log(i)
}

// console.log(newSet.entries()) // [value,value ]

console.log(newSet.keys()) // same as below 

console.log(newSet.values())


// you can convert a set again in array 

// [...newSet] or Array.from(newSet)

console.log([...newSet])
console.log(Array.from(newSet))