//Array Problem
console.log("Array Practice Problem by using Js");

// Problem Print Ten number of 3-Digit And find 2nd smallest and 2nd Largest
let Random1 = Math.floor(Math.random() * 900)+ 100;
console.log(Random1)
let Random2 = Math.floor(Math.random()* 900)+ 100;
console.log(Random2)
let Random3 = Math.floor(Math.random()* 900)+ 100;
console.log(Random3)
let Random4 = Math.floor(Math.random()* 900)+ 100;
console.log(Random4)
let Random5 = Math.floor(Math.random()* 900)+ 100;
console.log(Random5)
let Random6 = Math.floor(Math.random() * 900)+ 100;
console.log(Random6)
let Random7 = Math.floor(Math.random()* 900)+ 100;
console.log(Random7)
let Random8 = Math.floor(Math.random()* 900)+ 100;
console.log(Random8)
let Random9 = Math.floor(Math.random()* 900)+ 100;
console.log(Random9)
let Random10 = Math.floor(Math.random()* 900)+ 100;
console.log(Random10)

let Number =[Random1,Random2,Random3,Random4,Random5,Random6,Random7,Random8,Random9,Random10];
console.log("Array of Number : "+Number);
let SortNum = Number.sort();
console.log("Sorted Array :"+SortNums)
console.log("The 2nd Smallest Number is :"+SortNums[1]);
console.log("The 2nd Largest Number is :"+SortNums[8]);

// Prime Factor 
// Declaration of Array

let factors = new Array();

let num = 57; // Number to find the prime factors
console.log("Number to print the prime factor is :"+num)
for (let i =2; i <= num; i++) // for loop for the caculating factors
{
    while (num % i==0)
    {
        factors.push(i);
        num /= i;

    }
}
 // for loop for the Printing the factors
 console.log("Factor are :"+factors)


 // Print the Repeated Number from 1-100 and put numder onto an array
 const RepeatedNums = new Array();

 for(let i=1; i<=100; i=i+1)
 {
     if((i%11)==0)
     {
     RepeatedNums.push(i)
     }

 }
 console.log("Repeated Number are :"+RepeatedNums);