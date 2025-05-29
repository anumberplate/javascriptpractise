const course = {
  name: 'JavaScript for Beginners',
  duration: 3,
  sections:7
};

// console.log(course.name)

for (const key in course){
  console.log(course[key]);
}

let numbers = [0,1,2,3,4,5]
for(let number of numbers){
  console.log(number);
}