// *Variables*
// Create a variable and console log the value
var mirage;
console.log(mirage); // undefined
// Create a variable, add 10 to it, and alert the value
let cat;
cat += 10;
// alert(mirage);
console.log(cat); //NaN

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractAndDifference(n1, n2, n3, n4) {
  //   alert(n1 - n2 - n3 - n4);
  console.log(n1 - n2 - n3 - n4);
}

subtractAndDifference(100, 10, 5, 1); // 84

// Create a function that divides one number by another and returns the remainder
function divideAndRemainder(num1, num2) {
  return num1 % num2;
}

console.log(divideAndRemainder(15, 4)); // 3

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumnji(num1, num2) {
  const sum = num1 + num2;
  if (sum > 50) {
    // alert("Jumanji");
    console.log("Jumanji");
  } else {
    // alert("BUMANJI");
    console.log("BUMANJI");
  }
}

jumnji(12, 50); //Jumanji
jumnji(9, 5); // BUMANJI

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(num1, num2, num3) {
  const product = num1 * num2 * num3;
  if (product % 3 === 0) {
    // alert("ZEBRA");
    console.log("ZEBRA");
  } else {
    // alert("Debra");
    console.log("Debra");
  }
}

zebra(2, 3, 4); //ZEBRA
zebra(1, 2, 5); //Debra
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopThrough(word, x) {
  for (let i = 0; i < x; i++) {
    console.log(word);
  }
}

loopThrough("CHEERS", 5); // CHEERS CHEERS CHEERS CHEERS CHEERS
loopThrough("NONE", 0); //
