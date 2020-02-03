//Whole-script stric mode
'use strict';

//Create a time interval for the changes in quotes
function time(){
	setInterval(changeQuote,3000);
}

//Modify the quote included in the about me section
function changeQuote(){
	console.log("entro a funcion");
	let alternative = new Array();
	alternative[0] = "Perseverance, the secret of all triumphs";
	alternative[1] = "Patience has a magical effect before which difficulties disappear and obstacles vanish";
	alternative[2] = "To be able at  any moment to sacrifice who you are for who you will become";
	alternative[3] = "Stay, struggle and persevere";
	alternative[4] = "The big talent is persistence";
	alternative[5] = "It is spring again";
	let selection = Math.floor(Math.random()*alternative.length);
	console.log(alternative[selection]);
	document.getElementById('quote').innerHTML = "'"+ alternative[selection] + "'";	
}