var drum=new Audio();
drum.src="SOUNDS/drumsound.mp3";
var flute=new Audio();
flute.src="SOUNDS/flute.wav";
var guitar=new Audio();
guitar.src="SOUNDS/guitar.wav";
var piano=new Audio();
piano.src="SOUNDS/piano.mp3";
var tabla=new Audio();
tabla.src="SOUNDS/tabla.mp3";
var trumpet=new Audio();
trumpet.src="SOUNDS/trumpet.wav";
var xylophone=new Audio();
xylophone.src="SOUNDS/xylophone.wav";

var buttoncount =
	document.querySelectorAll(".instruments .button").length;

for (var j = 0; j < buttoncount; j++) {

document.querySelectorAll(".instruments .button")[j]
.addEventListener("click", function() {

	var content = this.innerHTML;
	sound(content);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("SOUNDS/drumsound.mp3");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("SOUNDS/flute.wav");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('SOUNDS/guitar.wav');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('SOUNDS/piano.mp3');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio('SOUNDS/tabla.mp3');
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('SOUNDS/trumpet.wav');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('SOUNDS/xylophone.wav');
	sound7.play();
	break;

	default: console.log(key);
}
}
