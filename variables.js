let course = {
  name: "JavaScript for Beginners",
  hours: 3
};

//console.log(course.name);

//course.name = "JavaScript Fundamentals";
//console.log(course.name);

console.log(course['name']);

course["name"] = 'JavaScript 101';
console.log(course.name);
