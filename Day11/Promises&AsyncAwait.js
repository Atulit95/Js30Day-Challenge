// ====================>Activitiy 1: Understanding Promises
// Task 1:
// const promise1 = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     console.log("Task is completed")
// },2000)
// resolve()
// })
// promise1.then(()=>{
//     console.log("Promise Consumed");
// })

// Task 2:
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const error = true
//         if(!error){
//             console.log("Hello User");
//             resolve()
//         }
//         else{
//             reject("Error: Something went as wrong")
//         }
//     },1000)
// })

// promise2.then(()=>{
//     console.log("Promise2 consumed");
// })
// .catch((error)=>{
//     console.log("Promise rejected");
//     console.log(error);
// })
// ====================>Activitiy 2: Chaining Promises
// Task 3:
const Promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error2 = false
        if(!error2){
            resolve({username: "Sunil", email: "example@gmail.com"})
        }
        else{
            reject("Error: Something went as wrong")
        }
    },5000)
})

// Promise3.then((user)=>{
//     console.log(user);
//     return user
// }).then((user)=>{
//     console.log(user.username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise Consumed");
// })

// ====================>Activitiy 3: Using Async/Await
// Task 4,5:
async function consumePromise(){
    console.log(">'calling'");
    Promise3.then((user)=>{
        console.log(user);})
    try{
        const result = await Promise3
        console.log(result.username);
    }catch(error){
        console.log(error);
    }
}

consumePromise()

// ====================>Activitiy 3: Fetching data from API
// Task 6:
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=6f239b9e3e57501fa1aa7941b71afda3')
.then(()=>{
    
})