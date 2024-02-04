//! given a posituve integer 'n' determine if the number is a power of 2 or not 

// an integer is a power of 2 if there exist an integer x that n === 2^x


// find that integer is power of 2 or not means n = 2^x

/* 
 n=8 
 8/2 = 4 (remainder = 0 )
 4/2 = 2 (remainder = 0 )
 2/2 = 1 (remainder = 0 )
 if remainder is not zero at any step exist out of loop since n is not power of 2 
 else if it goes till n = 1 and remainder is zero all step then n os power of 2 
*/

// ! BIG-O => O(logn)

function isPowerOfTwo(n) {
    if (typeof n !== 'number' || n < 1) {
       return false;
    } else {
      // console.log(Math.log2(n));
      return Number.isInteger(Math.log2(n));
    }
  }
  
//   console.log(isPowerOfTwo('4'));
//   console.log(isPowerOfTwo(undefined));
//   console.log(isPowerOfTwo(1));
//   console.log(isPowerOfTwo(2));
//   console.log(isPowerOfTwo(6));
//   console.log(isPowerOfTwo(7));
//   console.log(isPowerOfTwo(16));
//   console.log(isPowerOfTwo(32));
//   console.log(isPowerOfTwo(38));
//   console.log(isPowerOfTwo(1000));


// ! BIG-O => O(logn) => input size n is reduced by every iteration 
function isPowerOfTwoWithLoop(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true

}


/* 
* solving by bitwise and operator 
8421 => binary place holder logic 


8 = 1000
4 = 0100 => starting from right 0*(2^0)+0*(2^1)+1*(2^2)+0*(2^3)
3 = 0011
2 = 0010


*/

// ! BIG-O => O(1) always one operation check

function isPowerOfTwoBest(n){
  if(n<1){
    return false
  }
  return (n & (n-1)) === 0 // it always be zero for number which can be power of 2
}

console.log(isPowerOfTwoBest(1))
console.log(isPowerOfTwoBest(2))
console.log(isPowerOfTwoBest(4))
console.log(isPowerOfTwoBest(5))
console.log(isPowerOfTwoBest(128))

//* loga b = logc b / logc a