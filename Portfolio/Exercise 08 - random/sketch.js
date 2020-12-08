/**
 * @Date:   2020-10-27T13:15:39+00:00
 * @Last modified time: 2020-10-29T17:16:03+00:00
 */



let cWidth = 500;
let numOfSquares = 20;
let squareSize = cWidth / numOfSquares;


function setup() {
  createCanvas(cWidth, cWidth);
  colorMode(RGB, numOfSquares, numOfSquares, numOfSquares)
  rectMode(CENTER);
  noLoop();
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
      let scaleValue = map(d, 0, 500, 10, 30);
      let strokeCol = color(numOfSquares / 2, numOfSquares - j, numOfSquares - i)
      noFill();
      //strokeWeight(0.5);
      //stroke(strokeCol);
      //ellipse(0, 0, squareSize / 4, squareSize / 4);


      let randomNum = round(random(0, 1));
      if (randomNum == 0) {

        //rotate(rotateValue);
        strokeWeight(3);
        stroke(strokeCol);
        line(0, 0, squareSize, squareSize);
        strokeWeight(3);
        ellipse(0, 0, squareSize / 2, squareSize / 2);
        //rotate(rotateValue);
      } else {

        //rotate(rotateValue);
        strokeWeight(3);
        stroke(strokeCol);
        line(0, squareSize, squareSize, 0);
        rect(0, 0, squareSize / 2, squareSize / 2);
        //rotate(rotateValue);
      }


      pop();
    }
  }
}
