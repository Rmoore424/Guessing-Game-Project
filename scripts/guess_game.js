var rightNumber = Math.floor(Math.random() *100) + 1;
var lastValue = 0;
var hotCold = "";
var numGuesses = 5;
var currentGuesses = [];

function resetText() {
	$(".answer").val("Enter a number from 1-100");
}

function setGuesses() {
	numGuesses--;
	$("#total").html(numGuesses);
}

function noMoreGuesses() {
	if (numGuesses == 0 && lastValue != rightNumber) {
		$(".enter").unbind("click");
		$(".answer").unbind("keydown");
		$(".hint_box").html("Sorry no more guesses left.  Hit Start Over to try again.");
	}
}

function setNumber() {
	var value = +$('.answer').val();
	var lastDiff = Math.abs(rightNumber - lastValue);
	var currentDiff = Math.abs(rightNumber - value);
	if (lastDiff > currentDiff) {
		hotCold = "warmer";
	}
	else {
		hotCold = "colder";
	}
	$(".number").each(function(idx) {
		if (value == idx+1) {
			if (value == rightNumber) {
				$(this).addClass("correct");
				$(".hint_box").html("That's it! You guessed the right number! Hit Start Over to play again.");
				$(".enter").unbind("click");
				$(".answer").unbind("keydown");
				$(".win_banner").show();
				$(".answer_wrapper").addClass("opaque");
			}
			else if (value > rightNumber+30 || value < rightNumber-30) {
				$(this).addClass("ice");
	}
			else if ((value > rightNumber+15 && value <=rightNumber+30) || (value < rightNumber-15 && value >=rightNumber-30)){
				$(this).addClass("cold");
			}
			else if ((value > rightNumber+5 && value <=rightNumber+15) || (value < rightNumber-5 && value >=rightNumber-15)){
				$(this).addClass("warm");
			}
			else {
				$(this).addClass("hot");
			}
			if (value < rightNumber) {
				$(".hint_box").html("Too Low. Try a higher number. You're getting " +hotCold+".");
			}
			else if (value > rightNumber) {
				$(".hint_box").html("Too High. Try a lower number. You're getting " +hotCold+".");
			}
		}   
	});
	lastValue = value;
	currentGuesses.push(value);
}

function showHint() {
		$(".hint_box").html("The correct number is " + rightNumber + "!");
}

var enterMain = function() {
	var enterAnswer = +$(".answer").val();

	if (currentGuesses.indexOf(enterAnswer) >= 0) {
		$(".hint_box").html("You're already guess that number, please choose another one.")
	}
	else if (enterAnswer > 0 && enterAnswer < 101) {
		setNumber();
		setGuesses();
		resetText();
		noMoreGuesses();
	}
	else {
		$(".hint_box").html("Please enter a valid number.")
	}
}

function bindKey() {
	$(".answer").on("keydown", function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			enterMain();
		}
		else if (e.keyCode == 8) {
			$(".answer").val("");
		}
	});
}


function resetAll() {
	$(".number").removeClass("correct ice cold warm hot");
	rightNumber = Math.floor(Math.random() *100) + 1
	$(".hint_box").html("");
	$(".enter").bind("click", enterMain);
	bindKey();
	numGuesses = 5;
	$("#total").html(numGuesses);
	currentGuesses = [];
	lastValue = 0;
	hotCold = "";
	$(".win_banner").hide();
	$(".answer_wrapper").removeClass("opaque");
}