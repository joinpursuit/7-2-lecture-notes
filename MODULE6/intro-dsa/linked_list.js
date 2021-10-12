class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = nil;
        this.prev = nil;
    }

    append(value) {
        this.next = new LinkedListNode(value);
        this.next.prev = this;
    }
}