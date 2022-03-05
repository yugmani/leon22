// *Variables*
// Declare a variable, assign it a value, and alert the value
let job = "Engineer";
let isEmployed = false;
// alert(job); //Engineer
// alert(isEmployed); //false

// Create a variable, divide it by 10, and console log the value
const salary = 3000;
console.log(salary / 10); //300

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function productOfThree(n1, n2, n3) {
  alert(n1 * n2 * n3);
}

// productOfThree(10, 7, 2); //140

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addSubtractFour(m1, m2, m3, m4) {
  console.log(m1 + m2 - m3 - m4);
}

addSubtractFour(10, 30, 20, 5); // 15

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeWinna(n1, n2, n3) {
  let result = 100;
  result += n1;
  result -= n2;
  result /= n3;
  if (result > 25) {
    console.log("WE HAVE A WINNA");
  }
}

threeWinna(80, 30, 5); //WE HAVE A WINNA
threeWinna(8, 10, 5); //
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekAlert(myDay) {
  myDay = myDay.toLowerCase();

  if (myDay === "saturday" || myDay === "sunday") {
    alert("Weekend");
  } else if (
    myDay === "monday" ||
    myDay === "tuesday" ||
    myDay === "wednesday" ||
    myDay === "thursday" ||
    myDay === "friday"
  ) {
    alert("week day");
  } else {
    alert("Try again!");
  }
}

// weekAlert("friday"); //week day
// weekAlert("SUNDAY"); //weekend
// weekAlert("zebris"); //Try again!
// weekAlert("Monday"); //week day

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
  for (let i = 1; i <= num; i += 3) {
    console.log(i);
  }
}

countByThree(15); // 1,4,7,10,13
