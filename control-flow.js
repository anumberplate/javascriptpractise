// let b = [1,2,3,4,5,6,7];
// for (let element of b){
//   if (element % 2 === 0){
//     continue;
//   }
//   console.log(element);
// }

let c = { a:1, b:2, c:3, d:4, e:5 ,f:6 }

for (let key in c){
  if (c[key] % 2 === 0){
    continue;
  }
  console.log(c[key])
}

for (let key in c){
  if (c[key] === 4){
    break;
  }
  console.log(c[key])
}