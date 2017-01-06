let LinkedList = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

// create
LinkedList.prototype.insert = function (index, value) {
  // error checking
  if (index < 0 || index > this.length) {
    throw new Error('error on index insertion')
  }

  const newNode = { value }

  if (index === 0) {
    newNode.next = null
    newNode.prev = null
    this.head = newNode
    this.tail = newNode
  } else {
    let prevNode = this.find(index - 1)
    // console.log(prevNode)
    newNode.next = prevNode.next
    newNode.prev = prevNode
    prevNode.next = newNode

    if (!newNode.next) {
      this.tail = newNode
    } else {
      newNode.next.prev = newNode
    }
  }

  this.length ++
}

LinkedList.prototype.find = function (index) {
  let node = this.head
  for (let i=0; i < index; i++) {
    node = node.next
  }
  return node
}

// get
LinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.length) {
    throw new Error('invalid index on get');
  }

  return this.find(index).value;
}

// remove

LinkedList.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) {
    throw new Error('invalid index on remove');
  }

  let node = this.find(index);

  if(index === 0) {
    this.head = this.head.next;
    node.next.prev = null;
  } else if (!node.next) {
    this.tail = this.tail.prev;
    node.prev.next = null;
  } else {
    node.prev.next = node.next
    node.next.prev = node.prev
  }
  this.length--;
}

const list = new LinkedList
list.insert(0, 42)
list.insert(1, 17)
list.insert(2, 107)
// console.log( list.get(2) )
// console.log( list.find(1) )
list.remove(0);
console.log(list.get(1));
