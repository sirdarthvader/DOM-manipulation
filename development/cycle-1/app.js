var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = generateRandomColors(6);


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
        //if the user selected wrong colour....
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

function pickColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + " ," + g + ")";
}

function generateRandomColors(num) {
    var arr = [];
    for (i=0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}