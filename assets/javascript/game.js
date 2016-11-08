// create random  number between 19-120
function minMaxRandom (min,max){
	var randomNumber = Math.floor((Math.random () * (max-min + 1) + min));
	return randomNumber;
}
var call1 = minMaxRandom (19,120);

var totalScore = 0;

$("#blah").text(totalScore);

$("#numberToGuess").text("Number to guess: " + call1);

var diamond = minMaxRandom (1,12);
var sapphire = minMaxRandom (1,12);
var garnet = minMaxRandom (1,12);
var amethyst = minMaxRandom (1,12)
// make a counter
var counter = 0;

// make buttons count up

function winLoss (counter,call1) {
	
	if (counter === call1) {
		alert("you win!");

	};

	if (counter > call1){
		 alert("you loose");

	};
};


$("#diamond").on("click", function() {

	totalScore += diamond;

	
	$("#blah").text(totalScore);

	// alert("Your new score is:" + counter);

	winLoss(totalScore,call1);
	

});


 

$("#sapphire").on("click", function() {

	totalScore += sapphire;

	$("#blah").text(totalScore);

	// alert("Your new score is:" + counter);

	winLoss(totalScore,call1);

});



$("#garnet").on("click", function() {

	totalScore += garnet;

	$("#blah").text(totalScore);

	// alert("your new score is:" + counter);

	winLoss(totalScore,call1);
	

});

$("#amethyst").on("click", function() {

	totalScore += garnet;

	$("#blah").text(totalScore);

	// alert("your new score is:" + counter);

	winLoss(totalScore,call1);
	

});

// make crystals switch values

// make couner say win if match number or you loos 
// if you go over
	// alert("Your new score is:" + counter);
















