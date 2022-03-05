//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

function showMessage(myAge) {
  if (myAge < 16) {
    return "You can't drive.";
  } else if (myAge < 18) {
    retur;
    ("You can't hate from outside the club, because you can't even get in.");
  } else if (myAge < 21) {
    return "You can't drink.";
  } else if (myAge < 25) {
    return "You can't rent cars affordably.";
  } else if (myAge < 30) {
    return "You can't rent fancy cars affordably.";
  } else {
    return "You have nothing left to look forward too.";
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the h1
let btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  let message = "";
  let inputValue = document.getElementById("danceDanceRevolution").value;
  inputValue = +inputValue;

  if (!isNaN(inputValue)) {
    message = showMessage(inputValue);
  } else {
    message = "Enter a valid age...";
  }

  document.querySelector("h1").innerHTML = message;
  document.getElementById("danceDanceRevolution").value = "";
});
