// 1 Wrwite a program that allow to user enter number then print it

var randomNumber = window.prompt("enter any number");
randomNumber = Number(randomNumber);
console.log(randomNumber);

// 2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

var checkNumber = window.prompt("enter any number to check the divide by 3 and 4");
if (checkNumber == 0){
    console.log("not applicable to divide 0");
} else if (checkNumber % 3 === 0 && checkNumber % 4 === 0){
    console.log("YES");
}else {
    console.log("NO");
}

// 3-Write a program that allows the user to insert 2 integers then print the max

// i added Number() to avoid wrong result if we have 2 negative input

var maxFirstNumber = window.prompt("enter 1ST number to check the max");
var maxSecondNumber = window.prompt("enter 2ND number to check the max");
if (Number(maxFirstNumber) > Number(maxSecondNumber)) {
    console.log(maxFirstNumber);
}else if (Number(maxFirstNumber) < Number (maxSecondNumber) ) {
    console.log( maxSecondNumber);
    } else {
        console.log("the 2 numbers are equal !!!!")
}

// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

var checkIntegerNumber = window.prompt("enter number to check if positive or negative");
if (checkIntegerNumber < 0) {
    console.log("negative");
}else if (checkIntegerNumber > 0) {
    console.log( "positive");
    } else {
        console.log("the number is 0 !!!! try new input");
}

// 5- Write a program that take 3 integers from user then print the max element and the min element
// i added Number() to avoid wrong result if we have negative input


var compareFirstNumber = window.prompt("enter 1ST number to compare between 3 numbers");
var compareSecondtNumber = window.prompt("enter 2nd number to compare between 3 numbers");
var compareThirdNumber = window.prompt("enter 3rd number to compare between 3 numbers");

if (Number(compareFirstNumber) === Number(compareSecondtNumber) || Number(compareFirstNumber) === Number(compareThirdNumber) || Number(compareSecondtNumber) === Number(compareThirdNumber) ){
    console.log("no result for max (there is 2 numbers or more are equal !!!! try new inputs)");
} else if (Number(compareFirstNumber) > Number(compareSecondtNumber) && Number(compareFirstNumber) > Number(compareThirdNumber) ) {
    console.log("max element = " , compareFirstNumber);
} else if (Number(compareSecondtNumber) > Number(compareFirstNumber) && Number(compareSecondtNumber) > Number(compareThirdNumber) ) {
    console.log( "max element = " , compareSecondtNumber);
} else if (Number(compareThirdNumber) > Number(compareFirstNumber) && Number(compareThirdNumber) > Number(compareSecondtNumber) ) {
    console.log( "max element = " , compareThirdNumber);
}

if (compareFirstNumber === compareSecondtNumber || compareFirstNumber === compareThirdNumber || compareSecondtNumber === compareThirdNumber){
    console.log("no result for min (there is 2 numbers or more are equal !!!!) try new inputs");
} else if (Number(compareFirstNumber) < Number(compareSecondtNumber) && Number(compareFirstNumber) < Number(compareThirdNumber) ) {
    console.log("min element = " , compareFirstNumber);
} else if (Number(compareSecondtNumber) < Number(compareFirstNumber) && Number(compareSecondtNumber) < Number(compareThirdNumber) ) {
    console.log( "min element = " , compareSecondtNumber);
} else if (Number(compareThirdNumber) < Number(compareFirstNumber) && Number(compareThirdNumber) < Number(compareSecondtNumber) ) {
    console.log( "min element = " , compareThirdNumber);
}

// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

var checkOddNumber = window.prompt("enter any number to check if even or odd");
if (checkOddNumber == 0){
    console.log("not applicable to divide 0");
} else if (checkOddNumber % 2 === 0 ){
    console.log("Even");
}else {
    console.log("Odd");
}

// 8-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

var checkVowelCharacter = window.prompt("enter any character to check if it is vowel chars");
if (checkVowelCharacter === "a" || checkVowelCharacter === "e" || checkVowelCharacter === "i" || checkVowelCharacter === "o" || checkVowelCharacter === "u"){
    console.log("vowel");
}else {
    console.log("Consonant");
}

// 9-Write a program that allows user to insert integer then print all numbers between 1 to that’s number

var printUserNumber = window.prompt("enter any number to print loop to that number");
for (var i=1 ; i <= printUserNumber ; i+=1) {
    console.log(i);
}

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

var printMultiplyNumber = window.prompt("enter any number to multiply up to 12");
for (var i=1 ; i <= 12 ; i+=1) {
        console.log(i * printMultiplyNumber);
}


// 11 Write a program that allows to user to insert number then print all even numbers between 1 to this number

var printEvenUserNumber = window.prompt("enter any number to print all even number till that number");
for (var i=1 ; i <= printEvenUserNumber ; i+=1) {
    if(i % 2 === 0){
        console.log(i);
    }
}

// 12 Write a program that take two integers then print the power

var baseNumber = window.prompt("enter base number for power function");
var powerNumber = window.prompt("enter power times number for power function");
result = Number(baseNumber);
for ( i = 2 ; i <= powerNumber ; i++){
    result = (result * Number(baseNumber));
}
if (powerNumber == 0){
    console.log(1);

}else if (powerNumber < 0){
    console.log( "enter positive power input !!!!");
} else
console.log(result);


// 12- Write a program to enter marks of five subjects and calculate total, average and percentage

var firstScore = window.prompt("enter first subject score from 0 to 100");
var secondScore = window.prompt("enter second subject score from 0 to 100");
var thirdScore = window.prompt("enter third subject score from 0 to 100");
var fourthScore = window.prompt("enter fourth subject score from 0 to 100");
var fifthScore = window.prompt("enter fifth subject score from 0 to 100");
result = Number(firstScore) + Number(secondScore) + Number(thirdScore) + Number(fourthScore) + Number(fifthScore) ;
console.log("total marks =" , result);
console.log("Average marks =" , (result / 5) );
console.log("Percentage marks =" , (result / 5) );


// 13-Write a program to input month number and print number of days in that month

var monthNumber = window.prompt("enter month number");

if(monthNumber==1 || monthNumber==3 || monthNumber==5 || monthNumber==7 || monthNumber==8 || monthNumber==10 || monthNumber==12){
    console.log("Days in Month: 31")
} else if (monthNumber==4 || monthNumber==6 || monthNumber==9 || monthNumber==11){
    console.log("Days in Month: 30")
} else if (monthNumber==2 ){
    console.log("Days in Month: 28")
}else {
    console.log("user input was wrong month number")
}


// 14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

var firstSubject = window.prompt("enter Physics mark from 0 to 100");
var secondSubject = window.prompt("enter Chemistry mark from 0 to 100");
var thirdSubject = window.prompt("enter Biology mark from 0 to 100");
var fourthSubject = window.prompt("enter Mathematics mark from 0 to 100");
var fifthSubject = window.prompt("enter Computer mark from 0 to 100");
result = Number(firstSubject) + Number(secondSubject) + Number(thirdSubject) + Number(fourthSubject) + Number(fifthSubject) ;
percentage = result / 500 * 100 ;
if(percentage <=100 && percentage >=90){
    console.log("Percentage >= ", percentage ,"% : grade A");
}else if(percentage <90 && percentage >=80){
    console.log("Percentage >= ", percentage ,"% : grade B");
}else if(percentage <80 && percentage >=70){
    console.log("Percentage >= ", percentage ,"% : grade C");
}else if(percentage <70 && percentage >=60){
    console.log("Percentage >= ", percentage ,"% : grade D");
}else if(percentage <60 && percentage >=40){
    console.log("Percentage >= ", percentage ,"% : grade E");
}else if(percentage <40 && percentage >=0){
    console.log("Percentage >= ", percentage ,"% : grade F");
}else{
    console.log("user input was wrong , please try again");
}

// 15- Using switch Write a program to print total number of days in month

var monthNumberSwitch = window.prompt("enter month number");

switch (monthNumberSwitch) {
    case "1" :
    case "3" :
    case "5" :
    case "7" :
    case "8" :
    case "10" :
    case "12" :
        console.log("Days in Month: 31"); 
    break; 
    case "4" :
    case "6" :
    case "9" :
    case "11" :
        console.log("Days in Month: 30");
    break;
    case "2" :
        console.log("Days in Month: 28");
    break;
}
switch(true){
    case monthNumberSwitch<=0 :
    case monthNumberSwitch>12 :
        console.log("user input is a wrong month number");
}


// 16- Using switch Write a program to check whether an alphabet is vowel or consonant


var checkVowelSwitch = window.prompt("enter charachter to check if vowel");
switch(true){
        case checkVowelSwitch=="a" :
        case checkVowelSwitch=="e" :
        case checkVowelSwitch=="i" :
        case checkVowelSwitch=="o" :
        case checkVowelSwitch=="u" :
            console.log("alphabet is vowel");
        break;
        default:
            console.log("alphabet is Consonant");
}

// 17- Using switch Write a program to find maximum between two numbers

var maxFirstNumberSwitch = window.prompt("enter 1ST number to check the max using switch");
var maxSecondNumberSwitch = window.prompt("enter 2ND number to check the max using switch");
switch(true){

    case maxFirstNumberSwitch == maxSecondNumberSwitch :
        console.log("the 2 numbers are equal");
    break;
    case Number(maxFirstNumberSwitch) > Number(maxSecondNumberSwitch) :
        console.log(maxFirstNumberSwitch);
    break;
    
    default:
        console.log(maxSecondNumberSwitch);
}

// 18- Using switch Write a program to check whether a number is even or odd

var checkOddNumberSwitch = window.prompt("enter any number to check if even or odd using switch");

switch(true){

    case checkOddNumberSwitch == 0 :
        console.log("not applicable to divide 0");
    break;
    case checkOddNumberSwitch % 2 === 0 :
        console.log("Even number");
    break;
    default:
        console.log("Odd number");
}

// 19- Using switch Write a program to check whether a number is positive or negative or zero

var checkIntegerNumberSwitch = window.prompt("enter number to check if positive or negative using switch");

switch(true){
    case Number(checkIntegerNumberSwitch) === 0 :
        console.log("user input is zero re-try with other number");
    break;
    case Number(checkIntegerNumberSwitch) > 0 :
        console.log("positive");
    break;
    default:
        console.log("negative");
}

// 20- Using switch Write a program to create Simple Calculator

var firstCalcNumber = window.prompt("enter first number");
var secondCalcNumber = window.prompt("enter second number");
var operationCalc = window.prompt("enter operation");
sumResult = Number(firstCalcNumber) + Number(secondCalcNumber);
substractResult = Number(firstCalcNumber) - Number(secondCalcNumber);
multiplyResult = Number(firstCalcNumber) * Number(secondCalcNumber);
divideResult = Number(firstCalcNumber) / Number(secondCalcNumber);

switch(operationCalc) {
    case '+':
        console.log(sumResult);
    break;
    case '-':
        console.log(substractResult);
    break;
    case '*':
        console.log(multiplyResult);
    break;
    case '/':
        console.log(divideResult);
    break;
    default:
        console.log('Invalid input calc operation');
        break;
}

