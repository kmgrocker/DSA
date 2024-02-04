


// ! function is running n time equal to input size 
// * BIG-O => O(n)
function factorialRecursive(n){
     if(n===0) return 1; // base case for recursive function to exit 
     return n*factorialRecursive(n-1);
}

console.log(factorialRecursive(5)) // 5*4*3*2*1 
console.log(factorialRecursive(3))
console.log(factorialRecursive(0))