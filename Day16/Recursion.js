// ====================>Activitiy 1: Basic Recursion
// Task 1:
function factorial(num){
    if(num === 1){
        return 1;
    }
    else{
        return num * factorial(num - 1)
    }
}

// console.log(factorial(5));

// Task 2:

function fibo(num){
    if(num === 0 || num === 1){
        return num
    }
    else{
        return fibo(num - 1) + fibo(num - 2)
    }
}

// console.log(fibo(6));

// ====================>Activitiy 2: Recursion with Arrays
// Task 3:
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
const myArr = [21, 22, 23, 24, 55, 25, 26, 27, 28, 29, 30]

// console.log(sumArray(myArr));

// Task 4:
function MaxInArray(arr) {
    if (arr.length === 1) return arr[0];

    const maxOfRest = MaxInArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

// console.log(MaxInArray(myArr));

// ====================>Activitiy 3: String Manipulation with Recursion
// Task 5:
const str = "abcdef"
function revStr(str){
    let revstr = "" 
    if(str.length === 1){
        return str[0]
    }
    revstr = revStr(str.slice(1)) + str[0]
    return revstr
}

// console.log(revStr(str));

// Task 6:
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

// console.log(isPalindrome('abba'));

// ====================>Activitiy 4: Recursive Search
// Task 7: 
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// console.log(binarySearch(arr, 7));

// Task 8: 
function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    const count = (arr[index] === target) ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
}
const arr1 = [1, 2, 3, 4, 1, 2, 1, 1];
// console.log(countOccurrences(arr1, 1))


// ====================>Activitiy 5: Tree Traversal (Optional)
// Task 9:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// inOrderTraversal(root);

// Task 10:

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}
console.log(calculateDepth(root));