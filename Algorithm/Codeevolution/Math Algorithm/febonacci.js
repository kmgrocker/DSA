// ! problem statement 

/* 
* given a number n find the first n elements of febonacci sequence 
* the firts 2 niuimber are always 0,1 
* input = 3 => o/p => 0,1,1 
* input = 8 => o/p => 0,1,1,2,3,5,8,13
*/

// ! mine  

const febonacci = (n)=>{
    let prev = 0;
    let curr = 1;
    let result = [0,1];
    if(n===2) {
        return result;
    };
    for(let i=2;i<n;i++){
        let fres = prev+curr;
        prev = curr;
        curr = fres;   
        result.push(fres);
    }
    return result
}


// console.log(febonacci(3));
// console.log(febonacci(2));
// console.log(febonacci(8));


// ! better solution 


const febonacciBest = (n)=>{
    let fib = [0,1];    
     for(let i=2;i<n;i++){
        fib[i] = fib[i-1]+fib[i-2];
     }
     
    return fib;
}

// ! BIGO => O(n)

console.log(febonacciBest(2));
console.log(febonacciBest(3));
console.log(febonacciBest(7));