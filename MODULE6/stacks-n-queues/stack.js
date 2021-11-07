// STACKS
// Have last-in, first- out (LIFO) functionality
// Are not fair
// Function essentially like an array if you were only able to use push and pop

let people = [];

people.push("Obi"); // first
people.push("Poonam") // second
people.push("Mashu"); // last
people.pop(); // lost Mashu

console.log(people)


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
      return this.top === null
      // checks if we have nodes in our stack and returns boolean
    }

    push(data) {
      let newNode = new Node(data);
        // initialize node w/ Data
      newNode.next = this.top;
        // set new node next to current top
      this.top = newNode;
        // set top to new Node
    }

    pop(){
      if (this.top === null){
        throw new Error("The stack is currently empty")
      }

      // if(this.isEmpty()){
      //   throw new Error("The stack is currently empty")
      // }

        // throws error if stack is empty

        if(this.top){
          let node = this.top;
          this.top = node.next;
          return node;
        }
        // if there is a node on the top of our stack:
        // saves current top node to a var
        // resets top to current top node next
        // returns the node we removed (our var)
    }

    peek(){
      if(this.isEmpty()){
        throw new Error("The stack is empty! Ohhh noes!")
      }
        // throws error if stack is empty
      return this.top;
        // returns top node
    }

    toArray(){
      let nodeArr = [];

      let node = this.top;

      while(node){
        nodeArr.push(node.data)
        node = node.next
      }

      return nodeArr;
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
const stack = new Stack();
console.log(stack.isEmpty());
// console.log(stack.pop());
for (let i = 0; i < months.length; i++) {
  stack.push(months[i]);
}

const { inspect } = require("util");
console.log(stack.isEmpty());
// console.log(inspect(stack, { colors: true, depth: 2 }));
console.log(stack.peek());
console.log(stack.toArray())
