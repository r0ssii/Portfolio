/**
 * @Date:   2020-10-27T13:15:39+00:00
 * @Last modified time: 2020-10-28T09:11:06+00:00
 */



let cWidth = 500;
let numOfSquares = 20;
let squareSize = cWidth / numOfSquares;


function setup() {
  createCanvas(cWidth, cWidth);
  colorMode(RGB,numOfSquares,numOfSquares,numOfSquares)
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (let j = 0; j < numOfSquares; j++) {
    for (let i = 0; i < numOfSquares; i++) {
      let transX = i * squareSize + squareSize / 2;
      let transY = j * squareSize + squareSize/2;
      push();
      translate(transX, transY);
      let rotateValue = atan2(mouseY - transY, mouseX - transX);
      rotate(rotateValue);
      noFill();
      stroke(i,numOfSquares-j,0);
      ellipse(0, 0, squareSize/2, squareSize/2);
      noStroke();
      fill(255);
      ellipse(10,0,squareSize/4, squareSize/4);
      noStroke();
      fill(145);
      ellipse(0,10,squareSize/4, squareSize/4);
      pop();
    }
  }
}
