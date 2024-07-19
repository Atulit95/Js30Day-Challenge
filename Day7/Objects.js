// ====================>Activitiy 4: Object Creation and Acess
// Task 1:
const Book = {
    title: "The Wings Of Fire.",
    author: "Dr. A.P.J. Abdul Kalam",
    year: "2015"

}
// Task 2:
console.log(Book.title);
console.log(Book.author);

// ====================>Activitiy 4: Object Methods
// Task 3:
Book.details = function(){
    console.log(`The Book: "${this.title}" is written by ${this.author}`);
}
// Task 4:
Book.updateYear = function(newYear){
    this.year = newYear
    console.log(`The new year of book is: ${Book.year}`);
}
Book.details()
Book.updateYear(1478)

// ========================> Or <========================
// Task 3,4:
const Book2 = {
    title: "Eat the Frog.",
    author: "Brian Tracy",
    year: "2015",

    details(){
        console.log(`The Book: "${this.title}" is written by ${this.author}`);
    },
    updateYear(newYear){
        this.year = newYear
        console.log(`The new year of book is: ${Book2.year}`);
    }
}
Book2.details()
Book2.updateYear(1567)