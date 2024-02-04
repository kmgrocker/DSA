
class HashMap {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  #hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((v) => v[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }
  
  get(key){
    let index = this.#hash(key)
    let bucket = this.table[index]
    if(bucket){
      let result = bucket.find(v=>v[0]===key)
      return result[1]
    }
    return undefined
  }
  
  print(){
    for(let i=0;i<this.size;i++){
      if(this.table[i]){
         console.log(this.table[i])
      }
    }
  }
}

const myAdvanceMap = new HashMap(10);

myAdvanceMap.set('name','kmgrocker')
myAdvanceMap.set('age',30)
myAdvanceMap.set('mane','kmgrocker overridden')
myAdvanceMap.set('skills',['coding','writing','singing'])

myAdvanceMap.print()

