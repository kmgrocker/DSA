
class Queue{
  constructor(){
    this.data = {}
    this.head = 0
    this.tail = 0
  }
  enQueue(val){
    this.data[this.tail] = val;
    this.tail++
  }
  deQueue(){
    const head =  this.data[this.head]
    delete this.data[this.head]
    this.head++
    return head
  }
  enQueue(val){
    this.data[this.tail] = val;
    this.tail++
  }
  isEmpty(){
    return this.tail-this.head === 0
  }
  size(){
    return this.tail-this.head
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
 // BFS 
  preorder(root,flag){
    console.log('flag testing',flag)
     if(root){
         console.log(root.value)
        //  console.log('flag testing',flag)
        //  debugger
         this.preorder(root.left,'left')
        //  console.log('root',root)
         this.preorder(root.right,'right')
     }
  }

  inorder(root,flag){
    // console.log('flag testing',flag)
    // console.log('root',root)
     if(root){
         this.inorder(root.left,'left')
         console.log(root.value)
        //  console.log('root',root)
         this.inorder(root.right,'right')
     }
  }

  postOrder(root){
    if(root){
       this.postOrder(root.left)
       this.postOrder(root.right)
       console.log(root.value)
    }
  }

  levelOrder(){
    const bstQueue = new Queue();
    bstQueue.enQueue(this.root);
   
    while(!bstQueue.isEmpty()){
      const node = bstQueue.deQueue()
      console.log(node.value)
      if(node.left){
        bstQueue.enQueue(node.left)
      } 
      if(node.right){
        bstQueue.enQueue(node.right)
      } 
    }
  }

  min(root){
    if(!root.left){
       return root.value
    }else{
      return this.min(root.left)
    }
  }

  max(root){
    if(!root.right){
      return root.value
   }else{
     return this.max(root.right)
   }
  }

  delete(value){
   this.root = this.deleteNode(this.root,value)
  }

  deleteNode(root,value){
     if(root===null){
      return root
     }
     if(value<root.value){
      root.left = this.deleteNode(root.left,value)
     }else if(value>root.value){
      root.right =  this.deleteNode(root.right,value)
     }else{
       if(!root.left && !root.right){
         return null
       }
       if(!root.left){
        return root.right
       }else if(!root.right){
        return root.left
       }else{
         root.value = this.min(root.right)
         root.right = this.deleteNode(root.right,root.value)
       }
      
     }
     return root
  }

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);
bst.insert(6);
bst.insert(8);
bst.insert(9);


console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,7))
// console.log(bst.search(bst.root,3))

// bst.preorder(bst.root)
// bst.inorder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder();

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

 //!leaf node delete case  
// bst.delete(3)
// bst.inorder(bst.root)
// bst.levelOrder(bst.root)

//! node delete case where no node found 
// bst.delete(25)
// bst.levelOrder(bst.root) 

//! node delete with one child node 

// bst.delete(8)
// bst.postOrder(bst.root)

//! node deletion with two child node 

// bst.delete(7)
// bst.levelOrder(bst.root)



