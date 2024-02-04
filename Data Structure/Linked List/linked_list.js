// Write Javascript code!

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }

  insertAt(value, idx) {
    if (idx < 0 || idx > this.size) {
      return null;
    } else if (idx === 0) {
      this.prepend(value);
    } else {
      let newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;

      // console.log('prev', prev);
      this.size++;
    }
  }

  removeAt(idx) {
    let removedNode = "";
    if (idx < 0 || idx >= this.size) {
      return null;
    } else if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      // to remove the node in between we need to capture the previous node and connect with the next Node of given idx node so if node 2 needs to be deleted connect node 1 next pointer to node 2 next pointer then node 2 will be detached and garbage collected
      let prev = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeNodeValue(value) {
    // this method we will remove the first found Node based on the value correspond to Node
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      // if the value we are looking for is at head
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      // console.log('value  ', prev.next.value);

      return null;
    }
  }

  search(value) {
    let targetIndex = 0;
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return targetIndex;
        }
        curr = curr.next;
        targetIndex++;
      }
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is Empty");
    } else {
      let result = "";
      let curr = this.head;
      while (curr) {
        result += `${curr.value} `;
        curr = curr.next;
      }
      console.log(result);
    }
  }
}

const myLinkedList = new Linkedlist();

console.log(myLinkedList.getSize());
myLinkedList.print();
myLinkedList.prepend(5);
myLinkedList.prepend(12);
myLinkedList.prepend(8);
myLinkedList.prepend(3);

console.log(myLinkedList);
myLinkedList.append(13);
myLinkedList.append(17);

myLinkedList.insertAt(31, 4);
// myLinkedList.insertAt(27, 7);
myLinkedList.print();
console.log(myLinkedList.removeAt(0));
console.log(myLinkedList.removeAt(3));
myLinkedList.print();
console.log(myLinkedList.removeNodeValue(13));
myLinkedList.print();
console.log(myLinkedList.getSize());
