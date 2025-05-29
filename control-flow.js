let priceOfChocolate = 1.99;
let hasAmountInCash = 1.98;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate){
  console.log("Enjoy your purchase");
} else{
  console.log('Sorry you do not have enough');
}

let hour = 13;

if ((hour>=6) && (hour<=12)) {
  console.log("Serving breakfast");
} else if(hour>12 && hour<=14){
  console.log("Serving lunch");
} else{
  console.log("Serving dinner");
}
