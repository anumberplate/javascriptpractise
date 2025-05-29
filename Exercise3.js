function returnEvenNumbers(item){
  for (let num of item){
    if(num % 2 === 0){
      console.log(num);
    } 
  }
}

let u = [1,2,3,4,5,6,7,8,9,10];
returnEvenNumbers(u);

function returnOddNumbers(item){
  for (let num of item){
    if(num % 2 !== 0){
      console.log(num);
    } 
  }
}

u = [1,2,3,4,5,6,7,8,9,10];
returnOddNumbers(u);