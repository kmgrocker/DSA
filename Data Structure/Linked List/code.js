class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    // prepend => O(1)
    prepend(value) {
      let newNode = new Node(value);
      // case 1 list is empty an this is the first node
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        // case 2 where others node are there and we are prepending new Node
        // make the new Node head node
        // and next will point to previous head node
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    // append => O(n)
    append(value) {
      let newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        // we will start from head and then loop to the end
        // here while loop will make sure that we will loop till the .next will be null
        // means we reached the last elememt
  
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = newNode;
      }
      this.size++;
    }
  
    insertAt(value, idx) {
      // filter out the invalid index
      /* 
  if the index is zero we add an element at the front of the list and make it head
  If the index is the last position of the list we append the element at the end of the list
  if the index is between 0 or size – 1 we iterate over to the index and add an element at that index
      */
      if (idx < 0 || idx > this.size) {
        return;
      }
      if (idx === 0) {
        this.prepend(value);
        // size increment not needed since already covered in prepend and append method
      } else {
        let newNode = new Node(value);
        // for this we will take a temp variable and through loop we will advance that variable
        // suppose given index is 4 now we know that new node will be going b/w 3 and 4 index
        // so now we assign temp initially  as head then loop through untill its next value become 4 that mean now we are on 3rd node now 2 step needs to be taken
        // make newNode.next = 3rd node next
        // 3rd node .next = new node
        let prev = this.head;
        for (let i = 0; i < idx - 1; i++) {
          // console.log('idx', i);
          prev = prev.next;
          // console.log(prev)
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
      }
    }
  
    removeAt(idx) {
      if (idx < 0 || idx >= this.size) {
        return;
      }
      let removedNode;
      if (idx === 0) {
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
      // we are not removing the node manually  it will be garbage collected
      this.size--;
      return removedNode.value;
    }
  
    isEmpty() { 
     return this.size === 0;
    }

    getSize() {
      return this.size;
    }

    print() {
      if (this.isEmpty()) {
        console.log(`list is empty`);
      } else {
        let strResult = '';
        let curr = this.head;
        while (curr) {
          // console.log(curr);
          // console.log(curr.value);
          strResult += `${curr.value} `;
          curr = curr.next;
        }
        console.log(strResult);
      }
    }
  
  }

  
  const myList = new LinkedList();
  console.log(list.getSize());
  console.log(list.isEmpty());
  
  list.prepend(10);
  // list.print();
  list.prepend(20);
  list.prepend(30);
  list.append(50);
  list.print();
  // console.log(list.getSize());
  list.prepend(60);
  list.print();
  list.insertAt(5, 3);
  list.print();
  list.insertAt(8, 5);
  list.print();
  list.insertAt(12, 0);
  list.print();
  list.insertAt(15, 0);
  list.print();
  console.log(list.removeAt(0));
  list.print();
  
  // console.log(list);
  console.log(list.getSize());