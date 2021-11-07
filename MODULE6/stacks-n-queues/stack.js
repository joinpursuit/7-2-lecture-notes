// STACKS
// Have last-in, first- out (LIFO) functionality
// Are not fair
// Function essentially like an array if you were only able to use push and pop

// Will have the following methods
// push (adds an item)
// pop (removes an item)
// peek (returns the top item)
// isEmpty (checks if the stack is empty)
// toArray (converts our linked list to an array)

// Let's implement a Stack using a Linked List Data Structure

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

class Stack {
    constructor(top = null) {
      this.top = top;
    }

    isEmpty() {
      // checks if we have nodes in our stack and returns boolean
    }

    push(data) {
        // initialize node w/ Data
        // set new node next to current top
        // set top to new Node
    }

    pop(){
        // throws error if stack is empty

        // if there is a node on the top of our stack:
        // saves current top node to a var
        // resets top to current top node next
        // returns the node we removed (our var)
    }

    peek(){
        // throws error if stack is empty

        // returns top node
    }

    toArray(){
        // returns an array of all our nodes
    }
}

const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
// const stack = new Stack();
// console.log(stack.isEmpty());
// for (let i = 0; i < months.length; i++) {
//   stack.push(months[i]);
// }

// const { inspect } = require("util");
// console.log(stack.isEmpty());
// console.log(inspect(stack, { colors: true, depth: 12 }));