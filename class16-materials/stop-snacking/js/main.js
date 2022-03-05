//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const helpEl = document.querySelector("#help");

helpEl.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#stops").innerHTML = "";
  let inputValue = document.querySelector("#snacks").value;
  inputValue = Number(inputValue);
  for (let i = 0; i < inputValue; i++) {
    document.querySelector("#stops").innerHTML += "<p>STOP</p>";
  }

  document.querySelector("#snacks").value = "";
});
