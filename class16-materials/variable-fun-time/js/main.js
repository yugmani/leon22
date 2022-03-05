//--- Easy
//create a variable and assign it a number
let magicNum = 7;
//minus 10 from that number
magicNum = magicNum - 10;
//print that number to the console
// console.log(magicNum);

//--- Hard
//create a variable that holds the h133
let btnEl = document.querySelector(".btn");

//add an event listener to that element that console logs the sum of the two previous variables
btnEl.addEventListener("click", () => {
  document.querySelector("#result").innerText = "";
  //--- Medium
  //create a variable that holds a value from the input
  let userValue = document.querySelector("#danceDanceRevolution").value;
  //add 25 to that number
  userValue = Number(userValue);
  // console.log(typeof userValue);
  if (typeof userValue === "number") {
    userValue = Number(userValue) + 25;
    //alert that number
    // alert(userValue);
    document.querySelector("#result").innerText = userValue + magicNum;
    console.log(magicNum + Number(userValue));
  }

  document.querySelector("#danceDanceRevolution").value = "";
});
