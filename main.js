const LinkedList = () => {
    this.length = 0   //how many nodes 0 based
    this.head = null  //head will always contiain 1st node
}

LinkedList.prototype.insert = function(index, value) {
    //check if index working with is in range
    if (index < 0 || index > this.length) {
        throw new Error('Index error')
    }

    // newNode contains
    // value - the value stored in the node
    // next - contains the link to the next node
    let newNode = {
        value: value
    }

    if (index == 0) {
        // if inserting at start of list
        newNode.next = this.head
        this.head = newNode
    }
    else {
        // If inserting into the middle of the list
        // Find the node which we want to insert after
        let node = this._find(index - 1)
        newNode.next = node.next
        node.next = newNode
    }

    this.length++;
}

LinkedList.prototype._find = function(index) {
    let node = this.head
    for (let i=0; i<index; i++) {
        node = node.next
    }
    return node
}

LinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error')
    }

    return this._find(index).value
}

LinkedList.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error')
    }

    if (index == 0) {
        // if removing 1st node, move head to point to next node
        this.head = this.head.next
    }
    else {
        // Find the node before the one we want to remove
        // Set that node's next to point to the node following the
        // one being removed
        let node = this._find(index - 1)
        node.next = node.next.next
    }

    this.length--;
}

// Write an algorithm to find the middle element of a linked list
// without using the .length property
   // next & next.next

// Write an algorithm to find the third element from the end of a
// linked list without using the .length property
   // next & prev
   // head & end

// Write an algorithm to reverse a linked list
    // next -> temp
    // prev -> next
    // prev -> next
    // head <-> end

// Write an algorithm to find whether a linked list has a cycle
// (i.e. whether a node in the list has its next value pointing
// to an earlier node in the list)
    // slow = next
    // fast = next.next
    // if slow = fast then there is a loop
