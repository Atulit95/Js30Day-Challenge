// ====================>Activitiy 1: Function Declaration
// Task 1:
function CheckEvenOdd(number) {
    if(number % 2 === 0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}
// CheckEvenOdd(28);

// Task 2:
function SquareOfNum(number) {
    return console.log(`Square is: ${number * number}`);
}
// SquareOfNum(6)

// ====================>Activitiy 2: Function Expression
// Task 3:
const maxOfTwo = function (num1,num2){
    num1 > num2 ? console.log(`Greater Number is ${num1}`) : console.log(`Greater Number is ${num2}`);
}
// maxOfTwo(23,57)

// Task 4:
const ConcatTwoStr = function (str1,str2){
    return console.log(str1 + str2);
}
ConcatTwoStr("Hello ","World!")

// ====================>Activitiy 3: Arrow Function
// Task 5:
const arrowFunc1 = (num1,num2)=>{
    return console.log(num1 + num2);
}
arrowFunc1(9, 11)

// Task 6:
const arrowFunc2 = (str,CharToFind)=>{
    for (let i =0; i < str.length; i++){
        if (str[i] === CharToFind) {
            return console.log(true);
        }
    }
}
arrowFunc2('hello', 'o')

// ====================>Activitiy 4: Function Parameter & default Values
// Task 7:
const ProdOfTwo = (num1,num2 = 2)=>{
    return console.log(num1 * num2);
}
ProdOfTwo(9,3)

// Task 8:
const Greeting = (name,Age = 18)=>{
    return console.log(`Greetings ${name}.Your age is ${Age}`);
}

Greeting("Harsh" , 45)

// ====================>Activitiy 5: Higher-Order Function
// Task 9:
function printN(str) {
    console.log(str);
}
function executeNoOfTimes(func,numOfTimesToExecute){
    for(i = 1; i <=numOfTimesToExecute; i++){
        func(`Hello ${i}`)
    }
}
executeNoOfTimes(printN,5)

// Task 10:
function SquareOf(number) {
        return number * number
}

function resOf(number,value) {
    return console.log(`The Square of ${value} is ${number}.`);
}

function twoFuncInpFunc(fun1,fun2,value){
    const result = fun1(value)
    fun2(result, value)
}
twoFuncInpFunc(SquareOf, resOf, 5)