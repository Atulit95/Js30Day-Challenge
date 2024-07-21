// ====================>Activitiy 1: Template Literals
// Task 1:
const Details = {
    name: "Anil",
    age: '36'
}
console.log(`The person name is ${Details.name} and his age is ${Details.age}.`);

// Task 2:
console.log(`The person name is ${Details.name}.
The age of Anil is ${Details.age}.`);

// ====================>Activitiy 2: Destructring
// Task 3:
const myArr = [1, 2, 3, 4, 5, 6]
const [num1, num2] = myArr
console.log(`The first number is ${num1} and second number is ${num2}`);

// Task 4:
const {name: fullname} = Details
console.log(fullname);

// ====================>Activitiy 3: spread Opreator
// Task 5:
const myArr2 = [...myArr, 7, 8, 9]
console.log(myArr2);

// Task 6:
function details(name, age, gender, ...otherInfo){
    console.log(otherInfo);
}
details('Anil', 27, 'M', 'example@gmial.com','998877')

// ====================>Activitiy 4: Default Parameters
// Task 7:
const ProdOfTwo = (num1,num2 = 1)=>{
    return console.log(num1 * num2);
}
ProdOfTwo(9)
ProdOfTwo(9, 3)

// ====================>Activitiy 4: Default Parameters
// Task 8:
const title = "Enhanced Object Literal"
const About = "ES6 Features"

const Object_literals = {
    title,
    About,
    Subject: "Javascript"
}

console.log(Object_literals);

// Task 9:
const i = 2
const myObj = {
    ['mult' + i]: x => x*5
}

console.log(myObj.mult2(5));