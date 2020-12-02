/**
 * @Date:   2020-10-27T13:15:39+00:00
 * @Last modified time: 2020-10-28T10:17:08+00:00
 */



let cWidth = 500;
let numOfSquares = 20;
let squareSize = cWidth / numOfSquares;


function setup() {
  createCanvas(cWidth, cWidth);
  colorMode(RGB, numOfSquares, numOfSquares, numOfSquares)
  rectMode(CENTER);
}

function draw() {
  background(0);

  for (let j = 0; j < numOfSquares; j++) {
    for (let i = 0; i < numOfSquares; i++) {
      let transX = i * squareSize + squareSize / 2;
      let transY = j * squareSize + squareSize / 2;

      push();
      translate(transX, transY);
      let rotateValue = atan2(mouseY - transY, mouseX - transX);
      let d = dist(mouseX, mouseY, transX, transY);
      let scaleValue = map(d, 0, 500, 10 , 30);
      let largeScaleValue = map(d, 0, 500, 10, 20);

      rotate(rotateValue);
      noFill();
      stroke(0,i, j - numOfSquares);
      ellipse(0, 0, scaleValue, scaleValue);
      fill(255);
      ellipse(10, 0, largeScaleValue, largeScaleValue);

      pop();
    }
  }
}
