var currentRotation = 0;
var offsetRotation = 0;

let board = document.getElementById("board");
let center = document.getElementById("center");

function rotateLeft(){
    currentRotation -= 90;
    offsetRotation += 90;

    board.style.transform="rotate("+parseInt(currentRotation)+"deg)";
    center.style.transform="rotate("+parseInt(offsetRotation)+"deg)";
}

function rotateRight(){
    currentRotation += 90;
    offsetRotation -= 90;

    board.style.transform="rotate("+parseInt(currentRotation)+"deg)";
    center.style.transform="rotate("+parseInt(offsetRotation)+"deg)";
}
