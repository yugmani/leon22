//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

const numLoop = 21;

function savageSir(loop) {
  for (let i = 0; i < loop; i++) {
    document.getElementById("savageSays").innerHTML += "<p>21</p>";
  }
}

savageSir(numLoop);
