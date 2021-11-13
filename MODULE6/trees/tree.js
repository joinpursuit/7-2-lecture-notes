class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    appendChild(treeNodeInstance) {
        this.children.push(treeNodeInstance);
    }
}

// const John = new TreeNode('John');
// const Steve = new TreeNode('Steve');
// const Rohan = new TreeNode('Rohan');
// John.appendChild(Steve)
// John.appendChild(Rohan)
// const Lee = new TreeNode('Lee');
// const Bob = new TreeNode('Bob');
// const Ella = new TreeNode('Ella');
// Steve.appendChild(Lee)
// Steve.appendChild(Bob)
// Steve.appendChild(Ella)
// const Sal = new TreeNode('Sal');
// const Emma = new TreeNode('Emma');
// Rohan.appendChild(Sal)
// Rohan.appendChild(Emma)
// const Tom = new TreeNode('Tom');
// const Raj = new TreeNode('Raj');
// Emma.appendChild(Tom)
// Emma.appendChild(Raj)
// const Bill = new TreeNode('Bill');
// Tom.appendChild(Bill);

// console.log(John)

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    addNode(BSTNodeInstance) {
        const { value: insertValue } = BSTNodeInstance;
        // traverse the tree deciding left and right 
        // on value comparison. and insert ourselves 
        // (by assigning left or right on another node)
        // 
        // this.root;
        let stillLooking = true;
        let node = this.root;
        while (stillLooking) {
            if (node.value > insertValue) {
                if (node.left) {
                    node = node.left;
                } else {
                    node.left = BSTNodeInstance;
                    stillLooking = false;
                }
            } else {
                if (node.right) {
                    node = node.right;
                } else {
                    node.right = BSTNodeInstance;
                    stillLooking = false;
                }
            }
        }

        return 'success';
    }

    search(value) {
        const queue = [
            this.root.left, this.root.right
        ];

        while (queue.length > 0) {
            node = queue.shift();
            if (node.value === value) return node;
            if (node?.left) queue.push(node.left);
            // if (node && node.right) queue.push(node.right);
            if (node?.right) queue.push(node.right);
        }

        return 'not found';
    }

    // search(64)
    // queue = [, 84, 63, 65]
    // while 
    //      { n = 64 }
    //      
}

const rootNode = new BSTNode(50);
const treeInstance = new Tree(rootNode);

let next = new BSTNode(42);
treeInstance.addNode(next);
next = new BSTNode(23);
treeInstance.addNode(next);
next = new BSTNode(48);
treeInstance.addNode(next);
next = new BSTNode(31);
treeInstance.addNode(next);
next = new BSTNode(11);
treeInstance.addNode(next);
next = new BSTNode(67);
treeInstance.addNode(next);
next = new BSTNode(56);
treeInstance.addNode(next);
next = new BSTNode(51);
treeInstance.addNode(next);
next = new BSTNode(64);
treeInstance.addNode(next);
next = new BSTNode(63);
treeInstance.addNode(next);
next = new BSTNode(65);
treeInstance.addNode(next);
next = new BSTNode(99);
treeInstance.addNode(next);
next = new BSTNode(84);

// treeInstance.addNode(next);
console.log(treeInstance.root.right.left.right.right)