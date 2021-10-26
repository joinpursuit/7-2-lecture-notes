//  The most simple linked list ever
let node1 = { 
	data: "im first"
};

let node2 = {
	data:"im second",
	next:null
};

let node3 = {
	data:"im third",
	next:null
}
node1.next = node2;
node2.next = node3;

console.log(node2);

class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	};
};

class LinkedList {
	constructor(head = null){
		this.head = head;
	};
};

