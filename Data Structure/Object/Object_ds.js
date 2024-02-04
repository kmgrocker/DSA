
let computedProp = (arg)=> arg == 2 ? 'employee' : 'boss'

let obj = {
    name:'bruce',
    age:25,
    [computedProp(2)]:'dsss',
    dummy:'will be deleted',
    printObj(){
       return this
    }
}

// access elememt //! O(1)

console.log(obj.name)
console.log(obj['age'])
console.log(obj.boss)
console.log(obj.employee)

// delete // ! O(1)

delete obj.dummy;

// console.log(obj)

console.log(obj.printObj())

//! insert , remove , access => O(1)

//! all other search Object.keys() ,Object.values(), Object.entries() are of O(n)