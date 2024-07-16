// ====================>Activitiy 1: For Loop
// Task 1:
for(num=1; num < 11; num++){
    // console.log(num);
}

// Task 2:
let tableOf = 5
for(multiplier = 1; multiplier <=10; multiplier++){
    // console.log(`${tableOf}*${multiplier} = ${tableOf * multiplier}`);
}

// ====================>Activitiy 2: While Loop
// Task 3:
let sum = 0
let addupto = 10
while(addupto != 0){
    sum = sum + addupto
    addupto -= 1
}
// console.log(sum);

// Task 4:
let printfrom = 10
while(printfrom != 0){
    // console.log(printfrom);
    printfrom -= 1
}

// ====================>Activitiy 3: Do While Loop
// Task 5:
let start = 1
do{
    // console.log(start);
    start += 1
}while(start <= 5)

// Task 6:
let facotialOf = 5
result = 1
do{
    result = result * facotialOf
    facotialOf -= 1
}while(facotialOf != 0)
// console.log(result);

// ====================>Activitiy 3: Nested Loops
// Task 7:
for(rows = 1;rows <= 5;rows++){
    let str =""
    for(coloumn = 1; coloumn <= rows; coloumn++){
        str = str + "*"+" ";
    }
    // console.log(str);        
}

// ====================>Activitiy 3: Loop Control Statements
// Task 8:
for(num=1; num < 11; num++){
    if(num === 5){
        continue
    }
    console.log(num);
}

// Task 9:
for(num=1; num < 11; num++){
    if(num === 7){
        break
    }
    console.log(num);
}