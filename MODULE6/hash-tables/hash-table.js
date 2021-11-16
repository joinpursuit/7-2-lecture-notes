/*
    ********* HASH TABLES ***********

    What is Hashing?
   
    Hashing refers to a function that converts one value to another;
    Hashing is a very sophisticated field in CS and we dont't need to 
    be great at it but we should understand how it works;

    What is a Hash Table?

    A hash table is a data strucutre that  maps 
    certain values to unique keys - much like an Object in JS;
   
    A hash table has two primary parts:
        
        A TABLE to hold our data with keys pointing to certain values;

        A HASH FUNCTION to turn user input into specific key to store data;

    Lets pretend we're storing data on people in a hash-table;
    Our user's want to access a person's information by a specific name;
    Our HASH function would accept the string of the name and then parse that to a number;
    In order to find the informtion we need, we enter the string of the name we wish to find
    and then access that person's info which is stored in the TABLE at the KEY
    that is returned from the HASH

    Hash tables leverage a unique hash function that retruns specific value;
    This value, also refered to as a Hash code or an index, is then used to
    key into a certain index of an array where the data is stored.
    This index is often refered to as a 'Bucket' or a 'Slot'

    Hash Tables are FAST, so fast in fact they are often reffered to as having 
    A O(1) for insertion, deletion, and lookup;
    A Hash table does have a worst case of O(n) time but this happens so rarely performance is usually
    closer to constant time;
    Let's implement a simple Hash table in JS

*/


class Hash {
    constructor() {
       this.table = new Array(127) 
       }
    _hash(key){
        let hash = 0;
        for (let char of key) {
            hash += key.charCodeAt(char);
        };
        return hash % this.table.length 
    }
    set(key, value) {
       const index = this._hash(key);
       this.table[index] = [key, value];
    }
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    // ABSTRACTION, 
    // POLYMORPHISM,
    //  ENCAPSULATION, 
    // INHERITANCE
    remove(key) {
        const index = this._hash(key);
        delete this.table[index];
        // this.table[index] = [];
    };
    
}


const myHash = new Hash();

// myHash.set("Durdona", "Excellent student")
// myHash.remove("Durdona")
// console.log(myHash.get("Durdona"))
console.log(myHash._hash("zugzwang"));
console.log(myHash._hash("watch"));


