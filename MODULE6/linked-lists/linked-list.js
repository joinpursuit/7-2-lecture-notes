/*  A Linked list is a linear collection of data elements whose order 
is not given by their physical placement in memory. 
Instead, each element points to the next.    */




/* 

    To leverage OOP principles, lets create a Class for our Linked List;
    We need a Node class for each ELEMENT in the list;
    We need some DATA attribute and a NEXT attribute to connect the next node;
    We need a LnkedList class to wrap our nodes.

*/

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

const first = new Node(1);
const second = new Node(2);
const third = new Node("burger");


first.next = second;
second.next = third;

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
    //  start with a var - a counter
    // start at head
    // itterate through until next === null
    // return a number
    size() {
        let count = 0;
        let node = this.head
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    };
    // 
    search(val) {
        let node = this.head;
        while( node !== null && node.data !== val) {
            node = node.next
        }
        return node;
    };
    clear(){
        this.head = null;
    };

    getLast(){
        let node = this.head;
        if(!this.head) return null;
        while(node.next){
            //  this is how we iterate
            node = node.next
        }
        return node;
    };
    //  replace whatever head is
    //  create a new head and old head becomes first node;
    insert(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };

    delete(val){
        let node = this.head;
        let count = 0;
        while (node.data !== val && node.next) {
            count++;
            node = node.next;
        } 
        let foundNode = node;
        node = this.head;
        for (let i = 1; i < count; i++){
            node = node.next
        };
        node.next = foundNode.next;
    }
}

const myList =  new LinkedList(first);
myList.delete(2);
const months = [
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

let prevNode = new Node("Jan");

let monthsList = new LinkedList(prevNode);

//  loop through months;
for( let i = 0; i < months.length; i++){
    let currentNode = new Node(months[i]);
    prevNode.next = currentNode;
    prevNode = currentNode;
}
// 



  





