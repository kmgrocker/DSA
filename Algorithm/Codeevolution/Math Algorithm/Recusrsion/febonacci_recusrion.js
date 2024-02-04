// ! problem statement 

/* 
 * in matematics febonacci sequence is a sequence where each number is a sum of the two preceding ones 
*/

/* 
* given a number n find the nth element of febonacci sequence 
* the firts 2 number are always 0,1 

* input = f(0) => o/p => 0
* input = f(1) => o/p => 1 
* input = f(6) => o/p => 8
* input = f(7) => o/p => 13
*/
// Big-O => O(n)
function febonacciNormal(n){
    let fib = [0,1];
    for(let i=2;i<n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib;
}

// ! recursive problem break down 

/* 
 fib[2] = fib[1]+fib[0] => [0,1,1]
 fib[3] = fib[2]+fib[1] => [0,1,1,2]
 fib[4] = fib[3]+fib[2] => [0,1,1,2,3]
*/

/* 
* F[n]= F[n-1] +F[n-2] 
* F[3]= F[2] +F[1] 
* F[2]= F[1] +F[0] 
* every input in function will return the sum of its previous two result and our base condition is 
* F[0] = 0 , F[1] = 1
*/

//! big O(2^n) worse time comlexity compare to iterative approch which was O(n) linear  

function febonacciWithRecursion(n){
  return n ===0 ? 0 : n ===1 ? 1 : febonacciWithRecursion(n-1)+febonacciWithRecursion(n-2)
}

// ! care that value is oth index so 4th means index 4 in array actually 5th element 
console.log(febonacciWithRecursion(3))
console.log(febonacciWithRecursion(4))
console.log(febonacciWithRecursion(6))
console.log(febonacciWithRecursion(0))
console.log(febonacciWithRecursion(1))



// console.log(febonacciWithRecursion(8))

// console.log(febonacciNormal(2))
// console.log(febonacciNormal(5))
// console.log(febonacciNormal(3))
// console.log(febonacciNormal(8))


// find nth febonachi 

// for below code we are considering 1 base index not 0 

//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …


function fibWithZeroIndex(n){
  if(n<=1) return n;
  return fibWithZeroIndex(n-1)+fibWithZeroIndex(n-2)
}

function fib(n){
  // since above logic are 0 index based i am changing below code to work with 1 index base  
  if(n<=2) return n-1;
  return fib(n-1)+fib(n-2)
}


console.log(fib(1))

// ! imrpoving febonachi  with memoizzation 

function memoizedFib(n,memo){
  memo = memo || {}
    if(memo[n]){
      return memo[n]
    }
  if(n<=2) return n-1;
  console.log('runnig')
  // memo[n] = memoizedFib(n-1)+memoizedFib(n-2)
  return memo[n] = memoizedFib(n-1,memo)+memoizedFib(n-2,memo)
}


console.log(memoizedFib(8,{}))