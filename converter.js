// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// T(°F) = (T(°C) × 9/5) + 32
// T(°C) = (T(°F) - 32) × 5/9


function toCelsius (input) {
	var celsius = (input - 32) * (5/9);
	document.getElementById("converted").innerHTML = celsius + " degrees Celsius";
};

function toFahrenheit (input) {
	var fahrenheit = (input * (9/5)) + 32;
	document.getElementById("converted").innerHTML = fahrenheit + " degrees Fahrenheit";
};

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked

button.addEventListener("click", function determineConverter () {
  var userInput = document.getElementById("initialTemp").value;
  var x = document.getElementById("fahrenheit").checked;
  var y = document.getElementById("celsius").checked;

  if ( x === true ) {
  	toFahrenheit(userInput);
  } else if ( y === true ){
  	toCelsius(userInput);
  };

});
