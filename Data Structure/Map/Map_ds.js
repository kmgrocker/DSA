//*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map([['a',1],['b',2]]) // u can provide a option 2 dimensional array to create a Map also 

// general use case is to initiate a blank Map and adding value one by one by set method 

// ! Gotcha point 

// u can see below map is not giving error when setting property like this way but it is wrong and below you can see further when you try to do any other operation on Map it will misbehave


const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

console.log(wrongMap.has("bla")); // false
console.log(wrongMap.delete("bla")); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
