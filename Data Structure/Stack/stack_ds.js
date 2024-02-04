//! stack data structure are known and popular data structure which implementation can be found in many architecture like ex. JS call stack , browser history implementation 

//! it is LIFO => last in first out type of DS 

// * below we will be creating our own implementation of stack Data Structure 


/* 
* push(element) - add an element on the top of the stack 
* pop()- remove the top most element from the stack 
* peek() - get the value  of the top element without removing it 
* isEmpty()- check if the stack is empty 
* size() - get the number of elements in the stack 
* print () - visulaize the elements in the stack 
*/

class Stack{
    constructor(){
        this.list=[]
    }
  push(item){
    this.list.push(item)
  }
  pop(){
    this.list.pop()
  }
  peek(){
    return this.list.at(-1)
  }
  isEmpty(){
    // return !!this.list.length
    return !this.list.length
  }
  size(){
    return this.list.length
  }
  print(){
    console.log(this.list.toString());
  }
}

const mySTack = new Stack()

console.log(mySTack.isEmpty())

mySTack.push(2)
mySTack.push(5)
mySTack.push(8)

mySTack.print()
console.log(mySTack.peek())
mySTack.pop();
mySTack.print()
console.log(mySTack.size())
console.log(mySTack.peek())



/* 
class Stack {
  constructor() {
    this.data = new Array();
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
  peak() {
    return this.data[this.data.length - 1];
  }
  print() {
    return JSON.stringify(this.data);
  }
}

*/



/* 

class Stack{
    constructor(){
        this.items =[]
    }
    
push(el){
    this.items.push(el)
} 

size(){
    return this.items.length
}
pop(){
    if(!this.isEmpty()){
        return this.items.pop()
    }
}

isEmpty(){
    return this.items.length === 0
}

peek(){
    return this.items[this.items.length-1]
}
print(){
    // for(let i of this.items){
    //     console.log(i)
    // }
    console.log(JSON.stringify(this.items))
}
}
*/