// ====================>Activity 1: Sorting Algorithms
// Task 1:
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    console.log(arr);
}

// bubbleSort([64, 34, 25, 12, 22, 11, 90]);

// Task 2:
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
    console.log(arr);
}

// selectionSort([64, 34, 25, 12, 22, 11, 90]);

// Task 3:
function quicksort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// console.log(quicksort([64, 34, 25, 12, 22, 11, 90]));


// ====================>Activity 2: Searching Algorithms
// Task 4:
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i);
            return;
        }
    }
    console.log("Not found");
}

// linearSearch([64, 34, 25, 12, 22, 11, 90], 22);


// Task 5:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(mid);
            return;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Not found");
}

// binarySearch([11, 12, 22, 25, 34, 64, 90], 22);


// ====================>Activity 1: String Algorithms
// Task 6:
function countCharacterOccurrences(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count);
}

// countCharacterOccurrences("hello world");


// Task 7:
function longestUniqueSubstring(str) {
    let seen = new Set();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < str.length; end++) {
        while (seen.has(str[end])) {
            seen.delete(str[start]);
            start++;
        }
        seen.add(str[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log(maxLength);
}

// longestUniqueSubstring("abcabcbb");


// ====================>Activity 1: Array Algorithms
// Task 8:
function rotateArray(arr, k) {
    k = k % arr.length; 
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotated);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);


// Task 9:
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i++]);
    }

    while (j < arr2.length) {
        merged.push(arr2[j++]);
    }

    console.log(merged);
}

// mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);


// ====================>Activity 1: Dynamic Programming (Optional)
// Task 10:
function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp[n]);
}

// fibonacci(10);


// Task 11:
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    console.log(dp[capacity]);
}

// knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5);
