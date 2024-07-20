// ====================>Activitiy 1: Array Creation and Access
// Task 1:
const myArr = [1, 2, 3, 4, 5]
myArr.forEach(element => {
  console.log(element)
})

// Task 2:
console.log(myArr[0])
console.log(myArr[myArr.length - 1])

// ====================>Activitiy 2: Array Method(basic)
// Task 3:
myArr.push(98)
console.log(myArr)

// Task 4:
myArr.pop(98)
console.log(myArr)

// Task 5:
myArr.shift()
console.log(myArr)

// Task 6:
myArr.unshift(98)
console.log(myArr)

// ====================>Activitiy 3: Array Method(Intermediate)
// Task 7:
const myArr2 = []
myArr.map(element => {
  myArr2.push(element * 2)
})
console.log(myArr2)

// Task 8:
const myNewArr = myArr.filter(element => {
  if (element % 2 !== 0) {
    return element
  }
})
console.log(myNewArr)

// Task 9:
const result = myArr.reduce((acc, curval) => acc + curval, 0)
console.log(result)

// ====================>Activitiy 4: Array Itereation
// Task 10:
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index]
  console.log(element)
}

// Task 11:
myArr.forEach(element => {
  console.log(element)
})

// ====================>Activitiy 4: Muliti-dimensional Arrays
// Task 12:
const myMultiDarr = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
console.log(myMultiDarr)

// Task 13:
console.log(myMultiDarr[2][0])
