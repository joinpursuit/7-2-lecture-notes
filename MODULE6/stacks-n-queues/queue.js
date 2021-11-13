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
        let node = new Node(data)
        // initialize new Node
        if(this.first === null){
          this.first = node;
          this.last = node;
        } else{
          this.last.next = node
          this.last = node;
        }

        // check if we have any nodes in queue
        // if queue is empty set first and last to initialized node
        // else set initialized node as last node's next and new last
        // increment size and return new size

        // this.size += 1;    
        // return this.size;

        return ++this.size;
        
    }

    isEmpty() {
      return this.first === null
        // check if we have nodes in our queue and returns boolean
    }

    dequeue() {
      if(this.first === null){
        throw new Error("Our queue is currenlty empty!")
      }
        // throws error if queue is empty
      
        if(this.first === this.last){
            this.last = null;
        }
            let dequeued = this.first;
            this.first = this.first.next;
            this.size--
        // check if the first and last node are the same (only one node in our queue)
        // if true set current last to null
   
        // set new first element
        // decrement size
            return dequeued;
        // return dequeued node data
      }

      peek() {
        if(this.first === null){
          throw new Error("Our queue is empty!!!")
        }
        // throws error of queue is empty

        return this.first;
        // return first element in the queue
      }
  }

  const patrons = [
    "AnJu",
    "Durdona",
    "Jordan",
    "Carlo",
    "Adam",
    "Kenia",
    "Demi",
    "Gigi"
  ];
// const { inspect } = require("util")
const queue = new Queue()
for (let i = 0; i < patrons.length; i++) {
  queue.enqueue(patrons[i]);
}
console.log("peek", queue.peek());
const firstItem = queue.dequeue();
console.log("first item", firstItem);
console.log("peek after dequeue", queue.peek());
console.log(queue.isEmpty())
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek())
console.log(queue.isEmpty())

// console.log(inspect(queue, { colors: true, depth: 12 }));