// To use 'import' and 'export' we need a file package.json for it to run in node environment.
//====================>Activitiy 1: Creating and Exporting Modules
// Task 1:
import {addTwoNum} from "./Module1.js";
console.log(addTwoNum(5,7));

// Task 2:
import { myObj } from "./Module1.js";
console.log(myObj.method())

//====================>Activitiy 2: Named and Default Exports
// Task 3:
import { fun2, fun3 } from "./Module1.js";

console.log(fun2() + " & " + fun3());

// Task 4:
import defaultFunction from "./Module1.js";
console.log(defaultFunction());

//====================>Activitiy 3: Importing Entire Modules
// Task 5:
import * as Module1 from "./Module1.js";
console.log(Module1.myObj.name);

//====================>Activitiy 3: Using Third-Party Modules3
// Task 6:
// Installing a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import pkg from "lodash";
const {chunk} = pkg
const myArr = [1, 2, 3, 4, 5]
const lodashResult = chunk(myArr,2)
console.log(lodashResult);

// Task 7:
// Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=Berlin&appid=6f239b9e3e57501fa1aa7941b71afda3')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
