// QUEUE
// Have first-in, first- out (FIFO) functionality
// Are fair
// Function essentially like an array if you were 
// to utilize shift and push exclusively or unshift and pop exclusively

// Will have the following methods
// enqueue (adds an item)
// dequeue (removes an item)
// peek (returns the top item)
// isEmpty (checks if the queue is empty)

// Let's implement a Queue using a Linked List Data Structure

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(data) {
        // initialize new Node
        // check if we have any nodes in queue
        // if queue is empty set first and last to initialized node
        // else set initialized node as last node's next and new last
        // increment size and return new size
    }

    isEmpty() {
        // check if we have nodes in our queue and returns boolean
    }

    dequeue() {
        // throws error if queue is empty
  
        // check if the first and last node are the same (only one node in our queue)
        // if true set current last to null
   
        // set new first element
        // decrement size
       
        // return dequeued node data
      }

      peek() {
        // throws error of queue is empty

        // return first element in the queue
      }
  }

// const { inspect } = require("util")
// console.log("peek", queue.peek());
// const firstItem = queue.dequeue();
// console.log("first item", firstItem);
// console.log("peek after dequeue", queue.peek());
// console.log(inspect(queue, { colors: true, depth: 12 }));