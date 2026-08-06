"use strict";
// 1. Print Array Elements
// function printArray(arr: number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// let numbers: number[] = [10, 20, 30, 40, 70];
// printArray(numbers);

// 2. Find Sum of Array
// function sumArray(arr: number[]): number {
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let number: number[] = [10, 20, 30, 40, 50];
// console.log("sum =", sumArray(number));

// 3. Find Average of Array
// function avarageArray(arr: number[]): number {
//     let sum: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// let number: number[] = [10, 4, 50, 60, 100];
// console.log("Average =", avarageArray(number));

// 4. Find Maximum Element
// function findMax(arr: number[]): number {
//     let max: number = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let numbers: number[] = [10, 50, 20, 90, 30];
// console.log("Maximum =", findMax(numbers));

// 5.count even number
// function countEven(arr: number[]): number {
//     let count: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let numbers: number[] = [10, 15, 20, 25, 30, 35];
// console.log("Even Numbers =", countEven(numbers));

//6.print even number
// function printEven(arr: number[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// let numbers: number[] = [10, 15, 20, 25, 30, 35];
// printEven(numbers);

//7.search element
// function searchElement(arr: number[], search: number): boolean {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === search) {
//             return true;
//         }
//     }
//     return false;
// }
// let numbers: number[] = [10, 20, 30, 40, 50];
// console.log(searchElement(numbers, 30));

//8. count positive number
// function countPositive(arr: number[]): number {
//     let count: number = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let numbers: number[] = [-10, 20, -30, 40, 50];
// console.log("Positive Numbers =", countPositive(numbers));

//9.reverse array
// function reverseArray(arr: number[]): number[] {
//     return arr.reverse();
// }
// let numbers: number[] = [10, 20, 30, 40, 50];
// console.log("Original Array:", numbers);
// console.log("Reversed Array:", reverseArray(numbers));

//10.factorial
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5));

//11. Find Sum of Even Numbers
// function evenSum(arr: number[]): number {
//     let sum = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }
//     return sum;
// }
// console.log(evenSum([10, 15, 20, 25, 30]));

// 12. print nagitive number
// function printNegative(arr: number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// let numbers: number[] = [10, -20, 30, -40, 50, -60];
// printNegative(numbers);

// 13. fibonacci
// function fibonacci(n: number): void {
//     let a = 0;
//     let b = 1;
//     for (let i = 0; i < n; i++) {
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }
// fibonacci(10);

// 14.Find Smallest Number
// function smallest(arr: number[]): number {
//     let min = arr[0];
//     for (let num of arr) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
// console.log(smallest([10, 50, 20, 80, 30]));

// 15. search number
// function search(arr: number[], value: number): boolean {
//     for (let num of arr) {
//         if (num === value) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(search([10, 20, 30, 40], 30));
