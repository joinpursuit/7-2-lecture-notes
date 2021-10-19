// Write a function that takes an integer and then returns 
// an array of all the prime numbers up to that value.

// if (somehting ) {
//     here we need to do this 
// else {
//     do something else 
// } 


// 1. define isPrime(n)
// 2. test it to make sure it works 
// 3. create solution function that iterates from 0 until num 
// 4. return list of primes 

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function printPrimes(num) {
    const primes = [2];
    for (let i = 3; i <= num; i += 2) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(printPrimes(4));  // [2,3] 
console.log(printPrimes(2000000)); // [2,3,5,7,11,13,17,19]

