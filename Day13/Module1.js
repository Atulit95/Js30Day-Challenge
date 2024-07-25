// To use 'import' and 'export' we need a file package.json for it to run in node environment.
//====================>Activitiy 1: Error Handling with Try Catch
// Task 1:
export function addTwoNum(num1, num2){
    return num1 + num2
}
// Task 2:
export const myObj = {
    name: "Sunil",
    age: 52,
    address: "Kanpur, UP.",
    method: function(){
        console.log(`Name is: ${this.name}`);
    }
}
//====================>Activitiy 2: Named and Default Exports
// Task 3:
export function fun2(){
    return "This is func2"
}

export function fun3(){
    return "This is func3"
}
// Task 4:
export default function defaultFunction(){
    console.log('This is Deafault function.');
}
//====================>Activitiy 3: Importing Entire Modules
// Task 5:
// No need to declare something new for this task.we can use predefinied functions. 