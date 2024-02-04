// ! given an integer n find the factorial 

/* 
* factorial(3) = 3*2*1
* factorial(5) = 5*4*3*2*1
* factorial(n) = n*(n-1)*(n-2)*...*1

* exception factorial of zero = 1 (0! = 1)
*/

const factorial = (n)=>{
    let result = 1;
   if(n ===0 || n === 1){
    return 1
   }else{
      for(let i=n;i>1;i--){
         result = result*i
      }
   }
   return result;
}

console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(5)); // 5*4*3*2*1
console.log(factorial(3)); // 3*2*1 
console.log(factorial(4)); // 4*3*2*1

// ! better 
// * BIG-O =>  O(n)
function facatorialBetter(n){
    let result = 1;
    for(let i=2;i<=n;i++){
     result = result*i
    }
    return result;
}

// console.log(facatorialBetter(0))
// console.log(facatorialBetter(1))
// console.log(facatorialBetter(5))
// console.log(facatorialBetter(3))
// console.log(facatorialBetter(4))
// console.log(facatorialBetter(20))

//! recursion 
// 
function factorialBest(n){
    if(n===0) return 1;
    return n*factorialBest(n-1)
}

console.log(factorialBest(0))
console.log(factorialBest(1))
console.log(factorialBest(3))
console.log(factorialBest(4))
console.log(factorialBest(20))

