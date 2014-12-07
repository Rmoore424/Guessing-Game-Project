var rightNumber = Math.floor(Math.random() *100) + 1;

function setNumber() {
	var value = $('.answer').val();
	$(".number").each(function(idx) {
		if (value == idx+1) {
			if (value > rightNumber+30 || value < rightNumber-30) {
				$(this).css("background-color", "#1A1FD9")
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
}

function reset() {
	$(".number").each(function() {
		var backgroundColor = $(this).css("background-color");
		if (backgroundColor != "#FFFED9") {
			$(this).css("background-color", "#FFFED9");
		}
	})
}