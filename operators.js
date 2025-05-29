/*,-,+,*,/,%*/
let a = 5 + 4;
console.log(a);

let programmingLanguage = 'JavaScript';

let num1 = 14;
let num2 = 10;

const isNumOneGreaterThanOrEqualTo = num1 >= num2;
console.log(isNumOneGreaterThanOrEqualTo);

const isNumOneLessThanOrEqualTo = num1 <=num2;
console.log(isNumOneLessThanOrEqualTo);

let c = 2;
let b = '2';

console.log(c==b);

console.log(c===b);

let age = 16;
const canDrive = age >=16 ? true :false;
console.log(canDrive);

let points = 16;
const customerType = points>100 ? 'gold': 'silver';
console.log(customerType);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let hasCar = true;
let personAge = 16;

const cannDrive = age>=16 && hasCar;

console.log(canDrive);

console.log(!true);

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen);

let f = null;
const result = f ?? false;

console.log(result);

let userColor = "green";
let defaultColor = "blue";

const currentColor = userColor||defaultColor;
console.log(currentColor);