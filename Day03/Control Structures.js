// ====================>Activitiy 1: If-Else Statements
// Task 1:
let num1 = 2
if (num1 >= 0) {
  console.log('The number is positive.')
} else {
  console.log('The number is negative.')
}

// Task 2:
let age = 34
if (age >= 18) {
  console.log('You are eligible for voting.')
} else {
  console.log('You are not eligible for voting.')
}

// ====================>Activitiy 2: Nested If-Else Statements
// Task 3:
let num2 = 4
let num3 = 5

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(`The number ${num1} is the largest`)
  } else {
    console.log(`The number ${num3} is the largest`)
  }
} else {
  console.log(`The number ${num2} is the largest`)
}
// ====================>Activitiy 3: Switch Case
// Task 4:
switch (num1) {
  case 0:
    console.log('Sunday')
    break
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  case 4:
    console.log('Thrusday')
    break
  case 5:
    console.log('Friday')
    break
  case 6:
    console.log('Saturday')
    break
  default:
    console.log('Invalid Input')
    break
}

// Task 5:
let score = 70
switch (score) {
  case 90:
    console.log('A')
    break
  case 80:
    console.log('B')
    break
  case 70:
    console.log('C')
    break
  case 60:
    console.log('D')
    break
  case 50:
    console.log('E')
    break
  case 30:
    console.log('F')
    break
  default:
    console.log('Invalid Score')
    break
}
// attempt2
score = 80
grade = ""

switch (true) {
    case score >= 90 && score <= 100:
        grade = "A"
        break
    case score >= 80 && score < 90:
        grade = "B"
        break
    case score >= 70 && score < 80:
        grade = "C"
        break
    case score >= 60 && score < 70:
        grade = "D"
        break
    case score < 60:
        grade = "F"
        break
}
console.log(grade)

// ====================>Activitiy 4: Conditional(Ternary) operartor
// Task 6:
let num5 = 97
num5 % 2 === 0
  ? console.log(`The number ${num5} is even`)
  : console.log(`The number ${num5} is odd`)

// ====================>Activitiy 5: Combining Conditions
// Task 7:

let year = 2000

if (year % 400 === 0) {
  console.log(`The year ${year} is a leap year.`)
} else if (year % 100 === 0) {
  console.log(`The year ${year} is not a leap year.`)
} else if (year % 4 === 0) {
  console.log(`The year ${year} is a leap year.`)
} else {
  console.log(`The year ${year} is not a leap year.`)
}
