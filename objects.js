const dog = {
  name : 'Max',
  breed : 'Dachshund',
  age: 5,
  weightInPounds: 12,
  eat : function (){
    console.log("Chomp!");
  },
  bark() {
    console.log('Woof!')
  }
};

// const anotherdog = {
//   name : 'Marley',
//   breed : 'Chocolate Lab',
//   age: 3,
//   weightInPounds: 60,
//   eat : function (){
//     console.log("Chomp!");
//   },
//   bark() {
//     console.log('Woof!')
//   }
// };

function getDog(name, breed, age, weightInPounds){
  return{
    name,
    breed,
    age,
    weightInPounds,
    eat(){
      console.log("Chomp!");
    },
    bark() {
      console.log('Woof!')
    }
  }
}

const anotherdog = getDog('Marley','Chocolate Lab',3,60);
console.log(anotherdog);

function Dog(name, breed, age, weightInPounds){
  // this = {}
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weightInPounds = weightInPounds;
  this.eat = function(){
      console.log(this.name  + "Chomp!");
  }
  this.bark = function(){
      console.log(this.name + ': Woof!');
  }
}

let anotherDog = new Dog('Marley','Chocolate Lab',3,60);

const person = {
  name: 'Steven',
};

person.FavouriteFood = 'tacos';
console.log(person);

person['favouriteIceCream'] = 'chocolate';
console.log(person);

delete person.favouriteIceCream;
console.log(person);

person.eat = function (){
    console.log("Start Eating");
}


let p = Object();
p = {};

function add(num1,num2){
  return num1 + num2;
}

const Programmer = new Function('name', `
  this.name = name,
  this.writeCode = function(){
      console.log("Code in JavaScript");
  }
`);

const newProgrammer1 = new Programmer('Steven');

newProgrammer1.writeCode();