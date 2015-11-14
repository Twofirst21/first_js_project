myName = prompt("What's your name?");
if(myName === "Marius") {
  alert("Welcome Marius");
  guessNumber = prompt("Pick a number from 1 to 100");
  bigNumber = Math.random() * 100;
  
  if(bigNumber < guessNumber) {
    alert("You win! The bigNumber was " + bigNumber);
  } else {
    alert("You lose! The bigNumber was " + bigNumber);   
  }


} else {
  alert("Upsetting");
}
