person = {
  name: "Kyle",
  age: 5,
  height:180,

}

for (let c of Object.keys(person)){
  console.log(c);
}

for (let d of Object.values(person)){
  console.log(d);
}

for (let e of Object.entries(person)){
  console.log(e);
}