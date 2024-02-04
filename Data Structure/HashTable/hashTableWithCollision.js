
class HashMap{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
   
   #hash(key){
       let total = 0;
       for(let i=0;i<key.length;i++){
           total+= key.charCodeAt(i)
       }
       return total % this.size;
   }
   set(key,value){
       let index = this.#hash(key);
       this.table[index] = value
   }
   get(key){
       let index = this.#hash(key);
       return this.table[index]
   }
   remove(key){
       let index = this.#hash(key)
       this.table[index] = undefined
   }
   print(){
       for(let i=0;i<this.size;i++){
           if(this.table[i]){
               console.log(i,this.table[i])
           }
       }
   }
}

const myMap =  new HashMap(10)
myMap.set('name','krish')
myMap.set('mane','krish overridden') // example of hash table collision 
myMap.set('age',28)
myMap.set('employed',true)
myMap.set('skills',['coding','writing','singing'])

console.log(myMap.get('name'))
console.log(myMap.get('skills'))

myMap.remove('age')


myMap.print();
