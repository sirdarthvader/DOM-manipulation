var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = pickColor();

pickedColor = colors[3];

for (i=0; i<squares.length; i++) {
    //apply background colour to all the squares...
    squares[i].style.backgroundColor = colors[i]

    //enable click event on each square.....
    squares[i].addEventListener('click', function() {
        //if the user selected the right colour....
        var clickedColor = this.style.backgroundColor;
        //check if the selected colour matches the default colour...
        if(pickedColor === clickedColor) {
            changeColors(pickedColor);
        }
        //if the user user selected wrong colour....
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.text = "Wrong Choice!";
        }
    })
};

function changeColors(color) {
    for (i=0; i<=squares.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    // //create a variable for each color R G and B...
    // var r = Math.floor(Math.random() * 256);
    // var g = Math.floor(Math.random() * 256);
    // var b = Math.floor(Math.random() * 256);
    // var randomColor = "rgb(" + r + "," + " " + g +"," + " " + b + ")";
    // return randomColor;
    // 
    var random  = Math.floor(Math.random() * colors.length);
    return random;
}