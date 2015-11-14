var firstValue = prompt("Pick another number.");

firstValue = parseInt(firstValue);
if(isNaN(firstValue)) {
  alert("Please enter a number for the first value");
} else {
  var secondValue = prompt("Havin trouble there? Pick another number.");
  secondValue = parseInt(secondValue);

  if(isNaN(secondValue)) {
    alert("http://lmgtfy.com/?q=what+is+a+number");
  } else {
    finalValue = firstValue * secondValue;
    console.log(finalValue);
  }
}