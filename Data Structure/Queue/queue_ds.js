// ! queue ds also widely used Data structure out there in real world ex. callback queue (message queue) used by event loop in JS , printing maching internal Ds , CPU task sceduling 

// ! it follows the FIFO => First in first out 

// analogy to undersatand is people standing in the queue 

// * below we will be creating our own implementation of queue Data Structure 


/* 
* Enqueue(element) - add an element to the queue 
* dequeue()- remove the oldest element from the queue
* peek() - get the value of the element at the front of the queue without removing it 
* isEmpty()- check if the squeue is empty 
* size() - get the number of elements in the queue 
* print () - visulaize the elements in the queue
*/

class QueueWithArray{
 constructor(){
    this.list = []
 }
 enqueue(element){
    this.list.push(element)
 }
 dequeue(){
   !this.isEmpty() ? this.list.shift():null
 }
 isEmpty(){
    return this.list.length === 0
 }
 size(){
    return this.list.length
 }
 peek(){
    return !this.isEmpty() ? this.list[0] :null
 }
 print(){
    console.log(this.list.toString())
 }
}

const myQueue = new QueueWithArray();

console.log(myQueue.isEmpty())
myQueue.enqueue(2)
myQueue.print()
myQueue.enqueue(5)
myQueue.print()
myQueue.enqueue(6)
myQueue.print()

console.log(myQueue.isEmpty())
console.log(myQueue.peek())

myQueue.dequeue()
console.log(myQueue.peek())



// because of the Array shift method the above implementation is not that much great 

// ! Queue with Object 

// {0:'A',1:'B',2:'C'}

class QueueWithObject {
    constructor(){
        this.item = {}
        this.rear = 0
        this.front = 0
     }
     enqueue(element){
        this.item[this.rear] = element;
        this.rear++
     }
     dequeue(){
        const front =  this.item[this.front]
        delete this.item[this.front];
        this.front++
        return front
     }
     isEmpty(){
        return this.rear - this.fornt === 0
     }
     size(){
        return this.rear - this.front
     }
     peek(){
        return this.item[this.front]
     }
     print(){
        console.log(this.item)
     }
}
console.log('***** seprartor*****')
const myObjQueue = new QueueWithObject();

console.log(myObjQueue.isEmpty())

myObjQueue.enqueue(17)
myObjQueue.enqueue(7)
myObjQueue.enqueue(5)

myObjQueue.print()

myObjQueue.dequeue()
console.log(myObjQueue.peek())
// myObjQueue.dequeue()
// console.log(myObjQueue.size())
// myObjQueue.print()

// console.log(myObjQueue.isEmpty())



/* 
class  QueueWithObject{
    constructor(){
        this.list = {}
        this.tail = 0;
        this.head = 0
    }
    
    enqueue(el){
       this.list[this.tail] = el;
       this.tail++
    }
    
    dequeue(){
        const value = this.list[this.head]
        delete this.list[this.head]
        this.head++
        return value
    }
    peek(){
       if(!this.isEmpty()){
            return this.list[this.head]
       }else{
           return null
       }
    }
    
    isEmpty(){
        return this.tail-this.head === 0
    }
    size(){
        return this.tail-this.head
    }
    print(){
        console.log(JSON.stringify(this.list))
        // for(let i in this.list){
        //     console.log(this.list[i])
        // }
    }
}
*/