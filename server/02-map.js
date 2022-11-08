const letters = ["a", "b", "c", "d"];

//let newArray = [];
//for (let i = 0; i < letters.length; i++) {
  //newArray.push(letters[i] + "++");
//}

// LO MISMO PERO MÁS SECILLO

let newArray = letters.map(e => e + "++");

console.log("Original", letters);
console.log("New", newArray);
