buttonColor = ["red", "blue", "green", "yellow"];

gamePattern = [];
userClickedPattern = [];

var highScore = 0;
var started = false;
var level = 0;

$(document).keypress(function () {
	if (started == false) {
		$("h1").text("level " + level);
		sequence();
		started = true;
	}
});

$(".btn").click(function () {
	var userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);
	console.log(userChosenColor);
	sound(userChosenColor);
	animate_press(userChosenColor);
	checkAnswer(userClickedPattern.length - 1);

	console.log("user pattern = " + userClickedPattern);
	console.log("game pattern = " + gamePattern);
});

function sequence() {
	$("h1").text("level " + level);
	level++;
	userClickedPattern = [];

	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColor[randomNumber];
	gamePattern.push(randomChosenColor);

	setTimeout( function () {$("#" + randomChosenColor)
	.fadeOut(100)
	.fadeIn(100);sound(randomChosenColor);},500
	
	);;
}

function sound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animate_press(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function checkAnswer(level) {
	// var len = userClickedPattern.length;
	if (userClickedPattern[level] === gamePattern[level]) {
		if (userClickedPattern.length === gamePattern.length)
		{
			setTimeout( function () { sequence() }, 500);

		}
	} else {
		var wrong = new Audio("sounds/wrong.mp3");
		wrong.play();
		$("body").addClass("game-over");
		
		$("#level-title").text("Game Over, Press any key to restart ")
	
		setTimeout(function () {
			$("body").removeClass("game-over");startOver();
		}, 700);
		
	}
}


function startOver()
{
	level = 0;
	gamePattern = [];
	started = false;
}