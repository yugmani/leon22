//---Easy
//create a function that subtracts two numbers and alerts the difference
const differenceTwoNumbers = (num1, num2) => {
  alert("Difference: " + (num1 - num2));
};

//create a function that divides three numbers and console logs the quotient
const divideThreeNumbers = (num1, num2, num3) => {
  console.log("The Result: " + num1 / num2 / num3);
};
//create a function that multiplys three numbers and returns the product
const multiplyThreeNumbers = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

differenceTwoNumbers(34, 23);
divideThreeNumbers(20, 5, 2);
console.log("Product: " + multiplyThreeNumbers(1, 2, 3));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const addRemainderDivide = (num1, num2, num3) => {
  let sum = num1 + num2;
  return sum % num3;
};

console.log("Remainder: " + addRemainderDivide(10, 5, 4));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const complexExpression = (num1, num2, num3, num4) => {
  let product = num1 * num2;
  if (product > 100) {
    console.log("Sum of last Two: " + (num3 + num4));
  } else if (product < 100) {
    console.log("Difference of last Two: " + (num3 - num4));
  } else {
    alert("Complex Result: " + ((num1 * num2 * num3) % num4));
  }
};

console.log(complexExpression(10, 20, 3, 5));
