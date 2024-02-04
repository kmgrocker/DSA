// push ,pop ,peek , isempty , size  

class Stack{
    constructor(){
        this.list = [];
    }
   
    isEmpty(){
        return this.list.length===0
    }
    push(item){
        this.list.push(item)
    }
    pop(){
        this.list.pop()
    }
    peek(){
        return this.list[this.list.length-1]
    }
    size(){
        return this.list.length
    }
}

// const myStack  = new Stack()
// console.log(myStack.isEmpty())
// myStack.push(2)
// myStack.push(5)
// myStack.push(7)

// console.log(myStack.peek())
// console.log(myStack.size())
// console.log(myStack.isEmpty())

// myStack.pop()


// console.log(myStack.peek())
// console.log(myStack.size())

// ! Queue with Array 
// follows FIFO 
class Queue{
    constructor(){
        this.list=[]
    } 
  enqueue(item){
    this.list.push(item)
  }
  dequeue(){
    !this.isEmpty() ? this.list.shift():null
  }
  isEmpty(){
    return !this.list.length
  }
  peek(){
    return !this.isEmpty() ? this.list[0] : 'Queue is Empty'
  }
  clear(){
    this.list.length = 0
  }
  size(){
    return this.list.length
  }
  print(){
    console.log(this.list.toString())
  }
}

let myQueue = new Queue()

// myQueue.enqueue(3)
// myQueue.enqueue(8)
// myQueue.enqueue(7)

// myQueue.dequeue()

// console.log(myQueue.peek())

// myQueue.print()

//! circular queue 

/* 
* fix size
* at initial state front and rear pointer will be at same place  
* if circle is full enqueue opertaion will take the place left by   dequeue operation 
* every time dequeue happen front pointer needs to increase 
*/

class QueueBetter{
    constructor(){
        this.list = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(item){
       
        this.list[this.rear] = item;
        this.rear++
    }
    dequeue(){
        // let updatedFront = this.front
        delete this.list[this.front];
        this.front++
    }
    isEmpty(){}
    peek(){}
    size(){}
    print(){
        console.log(JSON.stringify(this.list))
    }
}


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
            // to make sure that when enqueue and dequeue reach the end of quue then the increment will be out of scope from array so i that case we need to make sure they work we are using modulas operator with capacity so if rear is 5 it will become zero and take place if it is not full 
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


const myCircularQueue =  new CircularQueue(5);
myCircularQueue.print();
myCircularQueue.enqueue(2)
myCircularQueue.enqueue(7)
myCircularQueue.enqueue(8)

myCircularQueue.print();

myCircularQueue.dequeue();

myCircularQueue.print();

myCircularQueue.enqueue(5)
myCircularQueue.print();
myCircularQueue.enqueue(3)
myCircularQueue.print();
myCircularQueue.enqueue(11)

myCircularQueue.print();