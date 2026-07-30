// 1. Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print 10 to 1
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}


// 3. Print Odd Numbers
let i = 1;

while (i <= 20) {
    console.log(i);
    i += 2;
}


// 4. Sum of 1 to 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// 5. Factorial of a Number
let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);


// 6. Count Digits
let num = 12345;
let count = 0;

while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}

console.log(count);


// 7. Reverse Number
let num = 1234;
let rev = 0;

while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}

console.log(rev);


// 8. Sum of Digits
let num = 1234;
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log(sum);


// 9. Print Cubes
let i = 1;

do {
    console.log(i * i * i);
    i++;
} while (i <= 10);


// 10. Fibonacci Series
let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;
}


//11. charactor check
let ch = '@';

if (
    (ch >= 'A' && ch <= 'Z') ||
    (ch >= 'a' && ch <= 'z')
) {
    console.log("The character is an alphabet");
}
else if (ch >= '0' && ch <= '9') {
    console.log("The character is a digit");
}
else {
    console.log("The character is a special character");
}


//12. square
for (let i = 1; i <= 10; i++) {
    console.log(i * i);


}


// 13. Check Prime Number
let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}


// 14. 6. Multiplication Table
let num = 5;
let i = 1;

do {
    console.log(num + " x " + i + " = " + (num * i));
    i++;
} while (i <= 10);


// 15. Sum of Array Elements
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum =", sum);