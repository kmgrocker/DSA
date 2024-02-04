class HashTableWithCollision{
    constructor(size){
     this.table = new Array(size)
     this.size = size
    }
    hash(key){
        let total = 0
         for(let i=0;i<key.length;i++){
             total+=  key.charCodeAt(i)           
         }
        //  console.log(total)
         return total % this.size
        }

        get(key){

        }

        // set(key,value){
        //     const index=this.hash(key)
        //     if(!this.table[index]){
        //         this.table[index] = value;
        //     }else{
        //         let oldvalue = this.table[index]
        //         this.table[index] = Array.isArray(oldvalue)? [...this.table[index],value]:[oldvalue,value]
        //     }
        // }

        set(key,value){
            const index=this.hash(key)
            this.table[index] = value;
        }
        get(key){
            const index = this.hash(key)
            return this.table[index]
        }
        remove(key){
            const index = this.hash(key)
            this.table[index] = undefined
        }
        print(){
            for(let i=0;i<this.table.length;i++){
                if(this.table[i]){
                    console.log(i,this.table[i])
                }
            }
        }
}

const hashmap = new HashTableWithCollision(10)
hashmap.set('grapes',1000)
hashmap.set('name','krish')
// below key will be colliding since the hash key is same for both according to our hash implementation and this behvaiour is known as hash table collision 
hashmap.set('mane','raj')
hashmap.set('age',28)

// console.log(hashmap.print())


// console.log(hashmap.get('name'))

hashmap.remove('age')

// console.log(hashmap.print())

// console.log(hashmap.hash('namensjnsdksdmsklsdddddlslfshrhr'))




class HashTableWithoutCollision {
     constructor(size){
        this.table = new Array(size)
        this.size = size
     }
     _hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.table.length
     }

     set(key,value){
        const index = this._hash(key)
        const bucket = this.table[index]
        if(!bucket){
          this.table[index]= [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                // overiding the value if same key is passd similar to object in JS 
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
     }

     get(key){
      const index = this._hash(key)
      const bucket = this.table[index]
      if(bucket){
          const sameKeyItem =  bucket.find(item=>item[0]===key)
          if(sameKeyItem){
            return sameKeyItem[1]
          }
      }
      return undefined
   
     }

     remove(key){
      const index = this._hash(key)
      const bucket = this.table[index]
      if(bucket){
        let sameKeyItem = bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
      }
     }

    

     print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const hashmapNew = new HashTableWithoutCollision(10)
hashmapNew.set('grapes',1000)
hashmapNew.set('name','krish')
hashmapNew.set('mane','raj')
hashmapNew.set('enma','ram')




hashmapNew.print()

console.log(hashmapNew.get('enma'))
hashmapNew.remove('mane')
hashmapNew.print()

console.log(hashmapNew.get('mane'))

// overriding the value when key is same 

hashmapNew.set('name','krish mohan')

hashmapNew.print()