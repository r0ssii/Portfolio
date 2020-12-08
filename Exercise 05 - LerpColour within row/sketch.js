/**
 * @Date:   2020-10-14T10:47:20+01:00
 * @Last modified time: 2020-10-22T14:34:53+01:00
 */
let numOfCir = 20;
let widthCir = 500 / numOfCir;

  let clr1
	let clr2


function setup() {
  createCanvas(500, 500);

  clr1 = color(255,100,37);
  clr2 = color(255,0,0);
  background(160);
  rectMode(CENTER);
}

function draw() {
  background(200,100,100);


  for (i = 0; i < numOfCir; i++) {
    for (j = 0; j < numOfCir; j++) {

      push();
      translate(i * widthCir + widthCir / 4, j * widthCir + widthCir / 4);
      let a = atan2(mouseY - i * widthCir, mouseX - j * widthCir);
      rotate(a);



      let middleColor = lerpColor(clr1, clr2, j*numOfCir/250);

      stroke(255);
      fill(middleColor);
      ellipse(56, 46, widthCir, widthCir);
      pop();
    }

  }

}



function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas(gd.timestamp(), 'png')
  }
}
