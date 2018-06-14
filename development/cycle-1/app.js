var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var systemMessageDisplay = document.querySelector("#default-code");
var userMessageDisplay = document.querySelector("#user-code");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector('#header');

var colors = generateRandomColors(6);
pickedColor = pickColor();

// Reset Game...
resetButton.addEventListener('click', function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    systemMessageDisplay.innerHTML = pickedColor;
    header.style.backgroundColor = 'steelblue';
    userMessageDisplay.innerHTML = '';
    for(i=0; i<=squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})


systemMessageDisplay.innerHTML = pickedColor;

for (i=0; i<squares.length; i++) {
    //apply background colour to all the squares...
    squares[i].style.backgroundColor = colors[i]

    //enable click event on each square.....
    squares[i].addEventListener('click', function() {
        //show user the current value....
        userMessageDisplay.innerHTML = this.style.backgroundColor;
        //if the user selected the right colour....
        var clickedColor = this.style.backgroundColor;
        //check if the selected colour matches the default colour...
        if(pickedColor === clickedColor) {
            header.style.backgroundColor = pickedColor;
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

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log("pickColor");
    return colors[random];
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + b + ", " + g + ")";
}

function generateRandomColors(num) {
    var arr = [];
    for (i=0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

