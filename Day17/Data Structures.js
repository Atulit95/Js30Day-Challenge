// ====================>Activity 1: Linked List
// Task 1:
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2:
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    display() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

// ====================>Activity 2: Stack
// Task 3:
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Task 4:
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    
    return reversed;
}

// console.log(reverseString("Hello, World!"));  


// ====================>Activity 3: Queue
// Task 5:
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


// Task 6:
function simulatePrinterQueue(jobs) {
    const queue = new Queue();
    jobs.forEach(job => queue.enqueue(job));
    
    while (!queue.isEmpty()) {
        console.log(`Processing: ${queue.dequeue()}`);
    }
}

// simulatePrinterQueue(["Print Document 1", "Print Document 2", "Print Document 3"]);

// ====================>Activity 4: Binary Tree
// Task 7:
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Task 8:
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        function insertNode(node, newNode) {
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }

        insertNode(this.root, newNode);
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);

// console.log(tree.inOrderTraversal());  


// ====================>Activity 5: Graph (Optional)
// Task 9:
class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.vertices[v1]) this.addVertex(v1);
        if (!this.vertices[v2]) this.addVertex(v2);

        this.vertices[v1].push(v2);
        this.vertices[v2].push(v1);
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];
        const result = [];

        while (queue.length > 0) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);

                queue.push(...this.vertices[vertex]);
            }
        }

        return result;
    }
}

const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "C");

// console.log(graph.bfs("A"));  

// Task 10:
class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.vertices[v1]) this.addVertex(v1);
        if (!this.vertices[v2]) this.addVertex(v2);

        this.vertices[v1].push(v2);
        this.vertices[v2].push(v1);
    }

    bfsShortestPath(start, end) {
        if (!this.vertices[start] || !this.vertices[end]) {
            throw new Error("Start or end vertex does not exist.");
        }

        const queue = [[start]];
        const visited = new Set();

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            if (vertex === end) {
                return path;
            }

            if (!visited.has(vertex)) {
                visited.add(vertex);

                for (const neighbor of this.vertices[vertex]) {
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }

        return null;  // Return null if there is no path
    }
}

// Example usage
const graph2 = new Graph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "D");
graph2.addEdge("D", "E");

const shortestPath = graph2.bfsShortestPath("A", "E");
console.log(shortestPath);