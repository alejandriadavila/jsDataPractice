// The initial numbers that must be verified.
const n1 = 10
const n2 = 15
const n3 = 20
const n4 = 5

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2

// Check three: no number larger than 25
// Changed to check if all numbers are lower than  or equal to 25
// Changed name to if under 25
const isUnder25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique

// Finally, log the results.
console.log(`The numbers add up to 50, at least two are odd, none are larger than 25, and each number is unique: ${isValid}.`)

//Check if all numbers are divisible by 5
const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0

//log if divisible by 5
console.log(`All numbers are divisible by five: ${isDivisibleBy5}`)

//Check if 1st n is bigger than last n
const isFirstLargerThanLast = n1 > n4

//log if larger or not
console.log(`The first number is larger than the last: ${isFirstLargerThanLast}`)

//aritmentic chain problem
const arithmeticChain = (n2-n1) * n3 % n4

//log it
console.log(`(${n1} - ${n2}) * ${n3} % ${n4} = ${arithmeticChain}`)