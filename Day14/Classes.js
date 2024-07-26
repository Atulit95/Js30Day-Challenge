// ====================>Activitiy 1: Class Definition
// Task 1:
class Person{
    constructor(username, age){
        this.username = username
        this.age = age
    }
    getGreeting() {
        return `Hello, my name is ${this.username} and I am ${this.age} years old.`;
    }
}

const user = new Person("Harsh",21)
// console.log(user);
// console.log(user.getGreeting());

// Task 2:
class Person2{
    constructor(username, age){
        this.username = username
        this.age = age
    }

    ageUpdate(newAge){
        this.age = newAge;
    }
}

const user2 = new Person2("Harsh",21)
user2.ageUpdate(35)
// console.log(user2);

// ====================>Activitiy 2: Class Inheritance
// Task 3:

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId
    }

    returnSID(){
        return this.studentId
    }
// Task 4:    
    getGreeting(){
        return `Hello, my name is ${this.username} and I am ${this.age} years old and his StudentId is ${this.studentId}`;
    }

}

const Student1 = new Student("Arpit", 15, "S101")
// console.log(Student1.returnSID());
// console.log(Student1.getGreeting());

// ====================>Activitiy 3: Static Methods and Properties
// Task 5:

class Person3{
    constructor(username, age){
        this.username = username
        this.age = age
    }
    static getGreeting() {
        return `Hello, Welcome to Javascript Coding Challlenges`;
    }
}

// console.log(Person3.getGreeting())

// Task 6:  
class Student2 extends Person{

    static StudentCount = 0

    constructor(name, age, studentId){
        super(name, age)
        this.studentId = studentId
        Student2.StudentCount++;
    }
}

const student2 = new Student2("A", 15, "S101")
const student3 = new Student2("B", 15, "S101")
const student4 = new Student2("C", 15, "S101")
const student5 = new Student2("D", 15, "S101")

// console.log(Student2.StudentCount);

// ====================>Activitiy 4:  Getters and Setters
// Task 7:
class Person4{
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    static getGreeting() {
        return `Hello, Welcome to Javascript Coding Challlenges`;
    }
    // Task 7:
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }

    // Task 8:
    set fullname(name){
        const [firstname, lastname] = name.split(" ")
        this.firstname = firstname
        this.lastname = lastname
    }

}

const user3 = new Person4("Sumit", "Kumar" , 15)

// console.log(user3.fullname);

// Task 8:
user3.fullname = "Sherya Tiwari";
// console.log(user3.fullname);


// ====================>Activitiy 5:  Private Fields (Optional)
// Task 9:
class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
        } else if (amount > this.#balance) {
            console.log('Insufficient balance.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }
}

// Task 10:

const account1 = new Account(5000)
console.log(account1.getBalance());
account1.deposit(2000)
account1.withdraw(3050)