// ====================>Activitiy 1: Error Handling with Try Catch
// Task 1:
function throwError(a ,b){
    console.log(a + b);
}
try {
    throwError(a)
} catch (error) {
    console.log("Something went wrong");
}

// Task 2:
function divideTwo(num , denomi){
    try {
        if (denomi === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        const result = num / denomi;
        return console.log(result);;
    } catch (error) {
        console.error(error.message);
    }
}
divideTwo(5,0)

// ====================>Activitiy 2: Finally Block
// Task 3:
try{
    throwError(a,b) //Catch wil be executed because of error of not passing right arguments
    console.log("Try executed");
}catch(error){
    console.log("Catch Executed");
}
finally{
    console.log("Finally Executed");
}

// ====================>Activitiy 3: Custom Error Objects
// Task 4:

class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = "CustomError"
    }
}

function divideTwo2(num , denomi){
    try {
        if (denomi === 0) {
            throw new CustomError ("This is cutomised Zero Division error.");
        }
        const result = num / denomi;
        return console.log(result);;
    } catch (error) {
        console.error(error.message);
    }
}
divideTwo2(5,0)

// Task 5:
class CustomError2 extends Error{
    constructor(message){
        super(message)
        this.name = "SrtingValidationError"
    }
}

function ValiidateString(str){
    try {
        if (str === "") {
            throw new CustomError2("Empty String is not valid");
        }
    } catch (error) {
        console.error(error.message);
    }
}
ValiidateString("")

// ====================>Activitiy 4: Error Handling in Promises
// Task 6:
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true
        if(!error){
            console.log("Hello User");
            resolve('hello96')
        }
        else{
            reject("Error: Something went as wrong")
        }
    },1000)
})

promise2
.catch((error)=>{
    console.log("Promise rejected once");
    console.log(error);
})

// Task 7:

function randomPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const error = true
            if(!error){
                console.log("Hello User");
                resolve('hello96')
            }
            else{
                reject(new Error("Promise rejected again!"))
            }
        },1000)
    })
}

async function handlePromise() {
    try {
      const result = await randomPromise();
      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

handlePromise();

// ====================>Activitiy 5: Graceful Error Handling in Fetch
// Task 8:
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=6f239b9e3e57501fa1aa7941b71afda')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error);})

// TAsk 9:
async function apicall(){
    try{
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=6f239b9e3e57501fa1aa7941b71afda3')
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

apicall()