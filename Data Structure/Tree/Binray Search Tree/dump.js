

function recursiveCounter(num){
   console.log(num);
   const newNum = num-1;

   if(newNum>0){
     recursiveCounter(newNum)
   }
    console.log('run')
   if(newNum>2){
     recursiveCounter(newNum)
   }
}

recursiveCounter(5)
