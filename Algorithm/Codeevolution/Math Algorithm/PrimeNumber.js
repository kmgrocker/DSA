//! given a natural number find it is prime or not 

// ! a prime is only divisible  by 1 and it self so basically have 2 facotor thats why 1 is not prime since it has 1 as a factor only   

// ex. 2,3,5,7,11 

//! if a number is divisible by 2, 3, 5 then it is not prime 


// ! Big O - O(n)

function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(4))
console.log(isPrime(17))
console.log(isPrime(29))
console.log(isPrime(49))


// ! Big O - O(sqrt(n))

// because of squre root the number of time loop need to run is reduced 
  
function isPrimeBetter(n){
    if(n<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}
