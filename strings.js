let sentence = " A new sentence ";

const doesIncludeNew = sentence.includes("new");
//console.log(doesIncludeNew);
const startsWithA = sentence.startsWith("A");
//console.log(startsWithA);
const endsWithA = sentence.endsWith("B");
//console.log(endsWithA);
const updatedSentence = sentence.replace("new", "short");
//console.log(updatedSentence);
const trimmedSentence = sentence.trim(" ")
//trimmedSentence = sentence.trim()

let firstName = "John";
let lastName = "Osuku" ;

let fullName = `${firstName} ${lastName}`;
console.log(fullName); 