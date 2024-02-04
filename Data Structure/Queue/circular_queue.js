
// ! in circular queue the size is fixed and
// ! we will be adding to the rear end and removing from front end 

// ! since the size is fixed for enque again we will be using if any block has empty place 

/* 
    * enqueue(el)-add an element to the queue 
    * dequeue(el)-remove the oldest elementfrom the queue
    * isFull()-check if the queue is full 
    * isEmpty()-check if the queue is empty  
    * peek()-get the value of the element at the front of the queue without removing it 
    * size() - get the number of elements in the queue 
    * print() - visuaize the elements in the queue 
*/


// [1,2,2,3] 

//? {0:'A',1:'B',2:'C'}

class CircularQueue{
    constructor(capacity){
        this.list = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front =  -1;
        this.rear = -1;
    }

    enqueue(item){
        if(!this.isFull()){
            // to make sure that when enqueue and dequeue reach the end of queue then the increment will be out of scope from array so i that case we need to make sure they work we are using modulas operator with capacity so if rear is 5 it will become zero and take place if it is not full 
          /* 
           2 % 5 => 2
           1 % 5 => 1
           4 % 5 => 4
           5 % 5 => 0
          */

        //   this.rear = this.rear+1
          this.rear = (this.rear+1) % this.capacity
          this.list[this.rear] = item
          this.currentLength++
          if(this.front===-1){
            this.front = this.rear
          }
        }
    }
 
    isFull(){
        return this.currentLength === this.capacity
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
         const item = this.list[this.front]
          //   delete this.list[this.front]
          this.list[this.front] = null
          this.front = (this.front+1)% this.capacity
          this.currentLength--
          // in case of it was a last item and we also dequeued it then list will be empty and we should reset the rear and front pointer to -1 
          if(this.isEmpty()){
            this.front--;
            this.rear--
          }
        return item
      } 

    
    isEmpty(){ 
       return this.currentLength === 0
    }

    size(){
        return this.capacity
    }
    
    peek(){
        if(!this.isEmpty()){
          return this.list[this.front]
        }
        return null
    }
    print(){
        console.log(this.list)
    }
}


// ! see below code more things addeded 

/* 
// FIFO
class CircularQueue {
  constructor(capacity) {
    this.data = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }
  enqueue(value) {
    if (!this.isFull()) {
      // this.rear++;
      this.rear = (this.rear + 1) % this.capacity;
      this.data[this.rear] = value;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    if (!this.isEmpty()) {
      const item = this.data[this.front];
      this.data[this.front] = null;
      // delete this.data[this.front];
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }

  isEmpty() {
    return this.currentLength === 0;
  }
  isFull() {
    return this.capacity === this.currentLength;
  }
  size() {
    return this.currentLength;
  }
  peak() {
    if (!this.isEmpty()) {
      return this.data[this.front];
    } else {
      return null;
    }
  }
  print() {
    // printing the value is such manner that even they are added at blank sapce at front but they seems to printed at last
    console.log(JSON.stringify(this.data)); // actual data which is stored
    if (!this.isEmpty()) {
      let i;
      let str = '';
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.data[i] + ' ';
      }
      str += this.data[i];
      return str;
    } else {
      return `Queue is Empty`;
    }
  }
}

const myqueue = new CircularQueue(5);
myqueue.enqueue(10);
myqueue.enqueue(20);
myqueue.enqueue(30);
myqueue.enqueue(40);
myqueue.enqueue(50);
console.log(myqueue.peak());
myqueue.dequeue();
console.log(myqueue.peak());
myqueue.dequeue();
myqueue.enqueue(60);
// myqueue.dequeue();
// myqueue.dequeue();
// myqueue.dequeue();
// myqueue.dequeue();
// myqueue.dequeue();
// myqueue.enqueue(60);

console.log(myqueue.print());


*/