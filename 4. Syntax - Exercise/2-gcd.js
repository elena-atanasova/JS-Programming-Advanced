// Greatest Common Divisor
// Two ways to determine the greatest common divisor of two numbers
// 1. By finding the common divisors
// 2. By Euclid's algorithm
function calculateGCD(a, b) {
    // recursive
    if (!b) return a;      // if b = 0 (base case), return a
    return calculateGCD(b, a % b);     // find the GCD(b, r) as GCD(b, r) = GCD(a, b)
}


//calculateGCD(15, 5);
let result = calculateGCD(2154, 458);
console.log(result);

// Euclid's Algorithm
// if a = 0, then GCD(a, b) = b as GCD(0, b) = b
// if b = 0, then GCD(a, b) = a as GCD(a, 0) = a
// if both a != 0 and b != 0, we write 'a' in quotint remainder form: a = b * q + r
// (q - quotient, r - remainder, a > b)
// find the GCD(b, r) as GCD(b, r) = GCD(a, b)
// we repeat this process until we get the remainder as 0