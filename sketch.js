var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0,0,0);  

  translate(200,200);
  rotate(-90);

  hr=hour();min=minute();sec=second();
  hrAngle=map(hr%12,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);

  //drawing seconds hand
  push();
  rotate(secAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  noFill();
  arc(0,0,200,200,360-secAngle,0);
  pop()

  //drawing mins hand
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  noFill();
  arc(0,0,220,220,360-minAngle,0);
  pop()

  //drawing hour hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,45,0);
  noFill();
  arc(0,0,240,240,360-hrAngle,0);
  pop()

}