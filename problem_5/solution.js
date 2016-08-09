// PROBLEM:
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// THEORY:
// There is no formula, but there is a two-step procedure.
//
// I will describe the procedure, and give an example of finding the LCM of 12, 15, and 25.
//
// (1) Find the prime factors of each of the natural numbers. Euler problem 3.
//
// 12 = 2² × 3
// 15 = 3 × 5
// 25 = 5²
//
// (2) Select the largest exponent on each of the prime factors. Multiply these together.
//
// 2² × 3 × 5² = 300
//
// The LCM of 12, 15, and 25 is 300.

// SOLUTION:
