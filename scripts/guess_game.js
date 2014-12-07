var rightNumber = Math.floor(Math.random() *100) + 1;
var lastValue = "";

function setNumber() {
	var value = $('.answer').val();
	$(".number").each(function(idx) {
		if (value == idx+1) {
			if (value == rightNumber) {
				$(this).css("background-color", "black");
			}
			else if (value > rightNumber+30 || value < rightNumber-30) {
				$(this).css("background-color", "#1A1FD9");
			}
			else if ((value > rightNumber+15 && value <=rightNumber+30) || (value < rightNumber-15 && value >=rightNumber-30)){
				$(this).css("background-color", "#80B8C4");
			}
			else if ((value > rightNumber+5 && value <=rightNumber+15) || (value < rightNumber-5 && value >=rightNumber-15)){
				$(this).css("background-color", "#FF6B78");
			}
			else {
				$(this).css("background-color", "#D22018")
			}
		}   
	})
	var lastValue = value;
}

function showHint() {
	var lowRange;
	var highRange;
	if ((rightNumber+20) <= 100) {
		highRange = rightNumber+20;
	}
	else {
		highRange = 100;
	}

	if ((rightNumber-20) >= 1) {
		lowRange = rightNumber-20;
	}
	else {
		lowRange = 1;
	}
	if (lastValue == "") {
		$(".hint_box").html("Your number is between " + lowRange + " and " + highRange);
	}

}

function highLow() {
	var value = $(".answer").val();
	if (value < rightNumber) {
		$(".hint_box").html("Too Low. Try a higher number.");
	}
	else if (value > rightNumber) {
		$(".hint_box").html("Too High. Try a lower number.");
	}
	else {
		$(".hint_box").html("That's it! You guessed the right number!");
	}
}

function resetAll() {
	$(".number").each(function() {
		var backgroundColor = $(this).css("background-color");
		if (backgroundColor != "#FFFED9") {
			$(this).css("background-color", "#FFFED9");
		}
	})
	rightNumber = Math.floor(Math.random() *100) + 1
	$(".hint_box").html("");
}