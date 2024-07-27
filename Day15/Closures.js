// ====================>Activitiy 1: Understanding Closures
// Task 1:

function Outer(){
    const variable = "Outer Func"

    function Inner(){
        console.log(variable);
    }

    return Inner();
}

// Outer();

// Task 2:

function Count(){
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

// const count = Count()
// console.log(count.getValue());
// count.increment();
// console.log(count.getValue());

// ====================>Activitiy 2: Practical Closures
// Task 3:

function IDgeneratorandTracker(){
    let Id = "E" + (Math.floor(Math.random() * 1000));
    let lastId;
    lastId = Id
    return {
        lastId: function() {
            return lastId;
        },
        recentId: function() {
            return Id
        },
        increment: function() {
            Id = "E" + (Math.floor(Math.random() * 1000));
        }
    };
}

const id = IDgeneratorandTracker()
// console.log(id.lastId());
// console.log(id.lastId());
// id.increment()
// console.log(id.recentId());
// console.log(id.lastId());

// Task 4:

function getUsername(username) {
    function getGreeting(){
            return `Welcome ${username} to daily Challenges.`
        }
    return getGreeting()
}

// console.log(getUsername("Sunil"));

// ====================>Activitiy 3: Closures in Loops
// Task 5:
const functions = [];

for (let i = 0; i < 10; i++) {
    functions.push(
        (function(index) {
            return function() {
                // console.log(index);
            };
        })(i)
    );
}
for (let i = 0; i < functions.length; i++) {
    functions[i](); 
}

// ====================>Activitiy 4: Module Pattern
// Task 6:

const ItemManager = (function() {
    // Private collection of items
    let items = [];

    // Method to add an item to the collection
    function addItem(item) {
        items.push(item);
        console.log(`${item} added to the collection.`);
    }

    // Method to remove an item from the collection
    function removeItem(item) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
            console.log(`${item} removed from the collection.`);
        } else {
            console.log(`${item} not found in the collection.`);
        }
    }

    // Method to list all items in the collection
    function listItems() {
        if (items.length > 0) {
            console.log("Items in the collection:");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        } else {
            console.log("The collection is empty.");
        }
    }

    // Exposing the methods to interact with the collection
    return {
        addItem: addItem,
        removeItem: removeItem,
        listItems: listItems
    };
})();

// ItemManager.addItem("Book");
// ItemManager.addItem("Pen");
// ItemManager.listItems();
// ItemManager.removeItem("Pen");
// ItemManager.listItems();
// ItemManager.removeItem("Pencil");
// ItemManager.listItems();

// ====================>Activitiy 4: Memoization
// Task 7:
function memoisedFibonacci(n, cache) { 
    cache = cache || [1, 1] 
    if (cache[n]) 
        return cache[n] 
    return cache[n] = memoisedFibonacci(n - 1, cache) +  
    memoisedFibonacci(n - 2, cache); 
}

console.log(memoisedFibonacci(4));

// Task 8:
function createMemoizedFactorial() {
    const cache = {};
    function factorial(n) {
        if (n in cache) return cache[n];
        if (n === 0 || n === 1) return 1;
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
    return factorial;
}

const memoizedFactorial = createMemoizedFactorial();

console.log(memoizedFactorial(5));  