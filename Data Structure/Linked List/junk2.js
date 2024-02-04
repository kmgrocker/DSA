class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size =0;
    }
   prepend(val){
       // case of empty 
       if(this.isEmpty()){
           this.head = new Node(val);
          
       }else{
         const newNode = new Node(val);
         newNode.next = this.head;
         this.head = newNode
       }
        this.size++
   } 
   append(val){
        let newNode = new Node(val)
       // case of empty list 
       if(this.isEmpty()){
           this.head = newNode
       }else{
           let prev = this.head;
           while(prev.next){
               prev = prev.next
           }
           prev.next = newNode
       }
       this.size++
   }
   insertAt(value,idx){
       // invalid cases 
       if(idx<0 || idx>this.size){
           return null
       }else if(idx===0){
           this.prepend(value)
       }else{
           let prev = this.head;
           let newNode = new Node(value)
           for(let i=0;i<idx-1;i++){
               prev = prev.next
           }
           console.log(prev)
           newNode.next = prev.next
           prev.next = newNode;
          
       }
        this.size++
   }
   removeAt(idx){
          let removedNode = ''
       // invalid cases 
       if(idx<0 || idx>this.size){
           return null
       }else if(idx===0){
           removedNode = this.head
           this.head = this.head.next
       }else{
           let prev = this.head;
           for(let i=0;i<idx-1;i++){
               prev = prev.next
           }
        //   console.log(prev)
           removedNode = prev.next
           prev.next = removedNode.next;
          
       }
        this.size--
        return removedNode.value
   }
   removeNode(value){
       // we will remove first found node where value is equal to node value 
       if(this.isEmpty()){
           return null
       }
       // we the requested value is found at head 
       if(this.head.value === value){
           let removedNode = this.head;
           this.head = this.head.next
            this.size--
           return removedNode.value
       }else{
           let prev = this.head
           while(prev.next && prev.next.value !== value){
               prev = prev.next
           }
           if(prev.next){
                 let removedNode = prev.next
                 prev.next = removedNode.next
                  this.size--
                 return removedNode.value
           }
           // in case of no node found that can be deleted
           return null 
       }
      
   }
   search(value){
       let targetIndex = 0;
       // returing the index of first found value or returning the -1 if no value found
       if(this.isEmpty()){
           return -1
       }
       else{
           let curr = this.head;
           while(curr){
               if(curr.value === value){
                   return targetIndex
               }
               curr = curr.next;
              targetIndex++
           }
           return -1
       }
   }
   getSize(){
       return this.size
   }
   
   isEmpty(){
       return this.size ===0
   }
   print(){
       if(this.isEmpty()){
           console.log('nothing to print')
       }else{
           let result = ''
           let curr = this.head;
           while(curr){
               result+= `${curr.value} `
               curr = curr.next
           }
           console.log(result)
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
console.log(myLinkedList.getSize());
myLinkedList.print();


myLinkedList.append(13);
myLinkedList.append(17);

myLinkedList.print();
console.log(myLinkedList.getSize());

myLinkedList.insertAt(31, 4);
myLinkedList.insertAt(27, 7);
myLinkedList.removeAt(5);
myLinkedList.print();

console.log(myLinkedList.getSize());
myLinkedList.removeNode(31);
myLinkedList.print();
console.log(myLinkedList.getSize());

console.log('search',myLinkedList.search(5));
console.log('search',myLinkedList.search(3));
console.log('search',myLinkedList.search(27));

