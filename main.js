var canvas = new fabric.Canvas("myCanvas");

var heightOfBodyPart = 30;
var widthOfBodyPart = 30;

var X = 10;
var Y = 10;

bodyPart = "";
character = "";

function playerUpdate() {
    fabric.Image.fromURL("Player.png", function (Img) {
        character = Img;
        character.scaleToWidth(150);
        character.scaleToHeight(140);
        character.set({
            top: Y,
            left: X
        });
        canvas.add(character);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        bodyPart = Img;
        bodyPart.scaleToWidth(widthOfBodyPart);
        bodyPart.scaleToHeight(heightOfBodyPart);
        bodyPart.set({
            top: Y,
            left: X
        });
        canvas.add(bodyPart);
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P and Shift key are pressed together");
        widthOfBodyPart = widthOfBodyPart + 10;
        heightOfBodyPart = heightOfBodyPart + 10;
        document.getElementById("currentWidth").innerHTML = widthOfBodyPart;
        document.getElementById("currentHeight").innerHTML = heightOfBodyPart;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M and Shift key are pressed together");
        widthOfBodyPart = widthOfBodyPart - 10;
        heightOfBodyPart = heightOfBodyPart - 10;
        document.getElementById("currentWidth").innerHTML = widthOfBodyPart;
        document.getElementById("currentHeight").innerHTML = heightOfBodyPart;
    }

    if(keyPressed == "70"){
        newImage('ironman_face.png');
        console.log("f");
    }
    if(keyPressed == "66"){
        newImage('spiderman_body.png');
        console.log("b");
    }
    if(keyPressed == "76"){
        newImage('hulk_legs.png');
        console.log("l");
    }

    if(keyPressed == "82"){
        newImage('thor_right_hand.png');
        console.log("r");
    }

    if(keyPressed == "72"){
        newImage('captain_america_left_hand.png');
        console.log("h");
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }
}