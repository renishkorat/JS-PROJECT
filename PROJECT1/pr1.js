// 1. Student Grade Calculator
let subject1 = 75;
let subject2 = 80;
let subject3 = 65;
let subject4 = 90;
let subject5 = 70;
let total = subject1 + subject2 + subject3 + subject4 + subject5;
let percentage = (total / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 50) {
    grade = "D";
}
else {
    grade = "Fail";
}
console.log("Total Marks =", total);
console.log("Percentage =", percentage + "%");
console.log("Grade =", grade);


// 2. Electricity Bill Calculator
let unit = 375;
let finalprize = 0;
if (unit > 200) {
    finalprize = 500 + 700 + (unit - 200) * 10;
}
else if (unit > 100) {
    finalprize = 500 + (unit - 100) * 7;
}
else {
    finalprize = unit * 5;
}
console.log(finalprize);


// 3.simple interest
let principal = 10000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
let totalAmount = principal + simpleInterest;
console.log("Simple Interest =", simpleInterest);
console.log("Total Amount =", totalAmount);


// 4.gross salary
let basicSalary = 30000;
let hra = basicSalary * 20 / 100;
let da = basicSalary * 10 / 100;
let ta = basicSalary * 5 / 100;
let grossSalary = basicSalary + hra + da + ta;
console.log("Gross Salary =", grossSalary);


// 5. Swap Two Variables
let a = 10;
let b = 20;
let temp;
temp = a;
a = b;
temp = a;
console.log("a =", a);
console.log("b =", b);


// 6. Employee Bonus Calculator
let salary = 50000;
let experience = 7;
let bonus = 0;
let finalSalary = 0;
if (experience >= 10) {
    bonus = salary * 20 / 100;
}
else if (experience >= 5) {
    bonus = salary * 10 / 100;
}
else {
    bonus = salary * 5 / 100;
}
finalSalary = salary + bonus;
console.log("Final Salary =", finalSalary);


// 7. Temperature Converter
let celsius = 24;
let fahrenheit;
fahrenheit = (celsius * 9 / 5) + 32;
console.log("fahrenheit =", fahrenheit);


// 8. Age Calculator
let birthYear = 2005;
let currentYear = 2026;
let age = currentYear - birthYear;
console.log("Age =", age);
if (age < 13) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager");
}
else if (age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}


// 9. Restaurant Bill
let food = 800;
let gst = food * 5 / 100;
let serviceCharge = food * 10 / 100;
let finalBill = food + gst + serviceCharge;
console.log("Food Bill = ₹" + food);
console.log("GST = ₹" + gst);
console.log("Service Charge = ₹" + serviceCharge);
console.log("Final Bill = ₹" + finalBill);


// 10. Profit or Loss
let costPrice = 5000;
let sellingPrice = 15000;
if (sellingPrice > costPrice) {
    let profit = sellingPrice - costPrice;
    let profitPercentage = (profit / costPrice) * 100;
    console.log("Profit = ₹" + profit);
    console.log("Profit Percentage = " + profitPercentage + "%");
}
else if (costPrice > sellingPrice) {
    let loss = costPrice - sellingPrice;
    let lossPercentage = (loss / costPrice) * 100;
    console.log("Loss = ₹" + loss);
    console.log("Loss Percentage = " + lossPercentage + "%");
}
else {
    console.log("No Profit No Loss");
}


// 11. Loan EMI Calculation
let P = 500000;
let R = 8.5;
let N = 60;
let monthlyRate = R / 12 / 100;
let emi = (P * monthlyRate * (1 + monthlyRate) ** N) / ((1 + monthlyRate) ** N - 1);
console.log("Monthly EMI: ₹" + emi.toFixed(2));


// 12. Salary Deduction
let basicSalary = 20000;
let pf = basicSalary * (12 / 100);
let tax = basicSalary * (5 / 100);
let insurance = 1000;
let totalDeductions = pf + tax + insurance;
let netSalary = basicSalary - totalDeductions;
console.log("Total Deductions = ₹" + totalDeductions);
console.log("Net Salary = ₹" + netSalary);


// 13. Currency Conversion
let inr = 10000;
let conversionRate = 85;
let usd = inr / conversionRate;
console.log("Amount in INR = ₹" + inr);
console.log("Conversion Rate = " + conversionRate);
console.log("Converted Amount in USD = $" + usd.toFixed(2));


// 14. Three-Number Calculator
let num1 = 10;
let num2 = 20;
let num3 = 30;
let sum = num1 + num2 + num3;
let average = sum / 3;
let largest;
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
let smallest;
if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
}
else {
    smallest = num3;
}
console.log("Sum = " + sum);
console.log("Average = " + average);
console.log("Largest Number = " + largest);
console.log("Smallest Number = " + smallest);


// 15. Attendance Eligibility
let totalWorkingDays = 120;
let daysAttended = 95;
let attendance = (daysAttended / totalWorkingDays) * 100;
console.log("Total Working Days = " + totalWorkingDays);
console.log("Days Attended = " + daysAttended);
console.log("Attendance Percentage = " + attendance.toFixed(2) + "%");
if (attendance >= 75) {
    console.log("Eligible for Exam");
}
else {
    console.log("Not Eligible");
}


// 16. Parking Fee Calculator
let hours = 7;
let fee = 0;
if (hours <= 2) {
    fee = hours * 20;
}
else if (hours <= 5) {
    fee = (2 * 20) + ((hours - 2) * 30);
}
else {
    fee = (2 * 20) + (3 * 30) + ((hours - 5) * 50);
}
console.log("Parking Hours = " + hours);
console.log("Total Parking Fee = ₹" + fee);


// 17. Product Discount
let price = 6000;
let isMember = true;
let discount = 0;
if (isMember) {
    discount = (price * 20) / 100;
}
else {
    discount = (price * 10) / 100;
}
if (price > 5000) {
    discount = discount + (price * 5) / 100;
}
let finalPrice = price - discount;
console.log("Product Price = ₹" + price);
if (isMember) {
    console.log("Customer = Member");
}
else {
    console.log("Customer = Non-member");
}
console.log("Total Discount = ₹" + discount);
console.log("Final Price = ₹" + finalPrice);


// 18. Employee Salary with Performance
let basicSalary = 50000;
let rating = 4;
let bonus = 0;
if (rating == 5) {
    bonus = (basicSalary * 30) / 100;
}
else if (rating == 4) {
    bonus = (basicSalary * 20) / 100;
}
else if (rating == 3) {
    bonus = (basicSalary * 10) / 100;
}
else if (rating == 2) {
    bonus = (basicSalary * 5) / 100;
}
else {
    bonus = 0;
}
let finalSalary = basicSalary + bonus;
console.log("Final Salary = ₹" + finalSalary);


//19. School Fee Calculator
let tuitionFee = 20000;
let libraryFee = 2000;
let sportsFee = 1500;
let scholarship = true;
let scholarshipAmount = 0;
if (scholarship) {
    scholarshipAmount = (tuitionFee * 20) / 100;
}
let finalFee = (tuitionFee - scholarshipAmount) + libraryFee + sportsFee;
console.log("Tuition Fee = ₹" + tuitionFee);
console.log("Library Fee = ₹" + libraryFee);
console.log("Sports Fee = ₹" + sportsFee);
if (scholarship) {
    console.log("Scholarship = ₹" + scholarshipAmount);
}
else {
    console.log("Scholarship = ₹0");
}
console.log("Final Fee = ₹" + finalFee);


// 20. Water Bill Calculator
let litre = 600;
let bill = 0;
if (litre <= 100) {
    bill = litre * 2;
}
else if (litre <= 500) {
    bill = (100 * 2) + ((litre - 100) * 3);
}
else {
    bill = (100 * 2) + (400 * 3) + ((litre - 500) * 5);
}
console.log("Water Consumption = " + litre + " litres");
console.log("Total Water Bill = ₹" + bill);