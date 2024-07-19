// ====================>Activitiy 1: Object Creation and Acess
// Task 1:
const Book = {
    title: "The Wings Of Fire.",
    author: "Dr. A.P.J. Abdul Kalam",
    year: "2015"

}
// Task 2:
console.log(Book.title);
console.log(Book.author);

// ====================>Activitiy 2: Object Methods
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
    // 3
    details(){
        console.log(`The Book: "${this.title}" is written by ${this.author}`);
    },
    // 4
    updateYear(newYear){
        this.year = newYear
        console.log(`The new year of book is: ${Book2.year}`);
    }
}
Book2.details()
Book2.updateYear(1567)

// ====================>Activitiy 3: Nested Object
// Task 5:
const Library ={
    LibraryName: "The Knowledge Hub",
    city: "Kanpur",
    Location: "At IIT kanpur Campus",
    books:[{
        title:"The Wings Of Fire.",
        author: "Dr. A.P.J. Abdul Kalam",
        year: "2015"
    },
    {
        title: "Eat the Frog.",
        author: "Brian Tracy",
        year: "2015",
    }]
}

// Task 6:
console.log(Library.LibraryName);
Library.books.forEach((elem)=>{
    console.log(elem.title);
})

// ====================>Activitiy 3: The 'this' Keyword
// Task 7:
const Book3 = {
    title: "The Wings Of Fire.",
    author: "Dr. A.P.J. Abdul Kalam",
    year: "2015",

    useOfThis: function(){
        console.log(`The Book: "${this.title}" is written by ${this.author} in the year ${this.year}.`);
    }

}
Book3.useOfThis()

// ====================>Activitiy 3: Object Iteration
// Task 8:
const Book4 = {
    title: "The Wings Of Fire.",
    author: "Dr. A.P.J. Abdul Kalam",
    year: "2015"

}
for(const key in Book4) {
    console.log(`the for ...in loop returns:- ${key}:${Book4[key]}`);
}
// Task 9:
console.log(Object.keys(Book4));
console.log(Object.values(Book4));