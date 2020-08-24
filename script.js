var x_wert;
var y_wert;
var treffer = 0;
var zufallszahl = 0;

function setup() {
  createCanvas(800, 800);
  background(57, 53, 50);
  frameRate(50);
}

function draw() {
  background(57, 53, 50);
  stroke("Black");
  strokeWeight(3);

  /*Linie2*/
  line(255, 0, 250, 322);
  /*Linie1*/
  line(0, 300, 250, 0);
  /*Linie3*/
  line(0, 800, 300, 230);
  /*Linie4*/
  line(300, 0, 300, 230);
  /*Linie5*/
  line(300, 230, 550, 230);
  /*Linie6*/
  line(550, 0, 550, 230);
  /*Linie7*/
  line(550, 230, 800, 800);
  /*Linie8*/
  line(600, 0, 800, 272);

  /*T r*/
  stroke("Black");
  fill("Black");
  quad(250, 0, 300, 0, 300, 230, 250, 322);

  /*Tisch*/
  stroke("Black");
  fill("Black");
  quad(230, 375, 570, 375, 620, 675, 180, 675);
  /*Spielfl che*/
  fill("White");
  quad(250, 395, 550, 395, 595, 655, 205, 655);
  /*Tischbeine*/
  fill("Black");
  rect(180, 675, 25, 125);
  rect(595, 675, 25, 125);
  /*Tischkante*/
  fill(43, 104, 123);
  rect(205, 675, 390, 15);
  /*Bildschirm*/
  stroke(43, 104, 123);
  fill("Black");
  rect(230, 225, 340, 150);
  fill("White");
  rect(250, 255, 300, 90);

  /*Poster*/
  stroke("Black");
  fill("White");
  /*Poster2*/
  quad(115, 185, 199, 80, 199, 255, 115, 375);
  fill("Yellow");
  quad(115, 185, 199, 80, 115, 375, 199, 255);
  /*Poster1*/
  fill("LightBlue");
  quad(0, 330, 80, 230, 80, 430, 0, 545);
  stroke("Black");
  line(38, 375, 38, 432);
  line(28, 469, 38, 432);
  line(52, 441, 38, 432);
  line(20, 419, 52, 375);
  /*Kopf*/
  ellipse(35, 370, 17, 20);
  /*Pistole*/
  line(52, 370, 52, 385);
  line(50, 370, 65, 355);
  /*Hitman*/
  stroke("Black");
  line(3, 332, 3, 358);
  line(12, 322, 12, 348);
  line(3, 345, 12, 335);
  line(18, 312, 18, 341);
  line(28, 302, 28, 330);
  line(23, 308, 32, 298);
  line(36, 293, 36, 322);
  line(36, 293, 40, 302);
  line(40, 302, 45, 281);
  line(45, 281, 45, 311);
  line(52, 275, 52, 303);
  line(52, 275, 58, 267);
  line(52, 287, 58, 279);
  line(58, 267, 58, 296);
  line(64, 259, 64, 290);
  line(64, 259, 69, 283);
  line(69, 255, 69, 283);
  /*Text*/

  fill("Black");
  textSize(30);
  textAlign(CENTER);
  text("Score: " + treffer, 370, 310);

  if (frameCount % 30 == 0) {
    zufallszahl = floor(random(1, 6));
  }
  if (zufallszahl == 1) {
    kreisezeichnen("DeepSkyBlue", 325, 450, 50);
  } else {
    kreisezeichnen("Black", 325, 450, 50);
  }
  if (zufallszahl == 2) {
    kreisezeichnen("dodgerblue", 475, 450, 50);
  } else {
    kreisezeichnen("Black", 475, 450, 50);
  }
  if (zufallszahl == 3) {
    kreisezeichnen("SkyBlue", 400, 520, 50);
  } else {
    kreisezeichnen("Black", 400, 520, 50);
  }
  if (zufallszahl == 4) {
    kreisezeichnen("CornFlowerBlue", 325, 595, 50);
  } else {
    kreisezeichnen("Black", 325, 595, 50);
  }
  if (zufallszahl == 5) {
    kreisezeichnen("RoyalBlue", 475, 595, 50);
  } else {
    kreisezeichnen("Black", 475, 595, 50);
  }

  /*Pfeil*/
  stroke(179, 238, 58);
  fill(179, 238, 58);
  triangle(/*1*/ 390, 45, 390, 65, 409, 68);
  triangle(/*2*/ 409, 45, 409, 70, 391, 68);
  quad(390, 100, 410, 100, 410, 68, 390, 68);
  strokeWeight(22);
  stroke(179, 238, 58);
  point(400, 105);
  strokeWeight(0);
  quad(/*1*/ 397, 116, 397, 90, 370, 90, 370, 116);
  triangle(370, 125, 370, 80, 345, 100);

  /*wei e Umrandung*/
  stroke("White");
  strokeWeight(4);
  line(/*1*/ 390, 45, 400, 52);
  line(/*2*/ 409, 45, 400, 52);
  line(/*3*/ 390, 45, 390, 90);
  line(/*4*/ 410, 45, 410, 110);
  line(/*5*/ 390, 90, 370, 90);
  line(/*6*/ 405, 115, 370, 115);
  line(/*7*/ 370, 125, 370, 115);
  line(/*8*/ 370, 80, 370, 90);
  line(/*9*/ 345, 100, 370, 80);
  line(/*10*/ 345, 100, 370, 125);
  line(/*Kurve*/ 405, 115, 410, 110);

  fill("Black");
  strokeWeight(0);
  textSize(15);
  textAlign(CENTER);
  text("E", 400, 68);
  text("X", 400, 83);
  text("I", 400, 98);
  text("T", 400, 113);
  textSize(10);
  text("Way", 380, 100);
  text("Out", 380, 110);

  hammer(mouseX, mouseY);
}

function mousePressed() {
  if (dist(475, 595, mouseX, mouseY) < 50 && zufallszahl == 5) {
    treffer = treffer + 1;
  }

  if (dist(325, 595, mouseX, mouseY) < 50 && zufallszahl == 4) {
    treffer = treffer + 1;
  }

  if (dist(400, 520, mouseX, mouseY) < 50 && zufallszahl == 3) {
    treffer = treffer + 1;
  }

  if (dist(475, 450, mouseX, mouseY) < 50 && zufallszahl == 2) {
    treffer = treffer + 1;
  }

  if (dist(325, 450, mouseX, mouseY) < 50 && zufallszahl == 1) {
    treffer = treffer + 1;
  }
}

function kreisezeichnen(farbe, koordx, koordy, durchmesser) {
  /*Felder*/
  fill(farbe);
  ellipse(koordx, koordy, durchmesser, durchmesser);
}

function hammer(hammer_x, hammer_y) {
  stroke("Black");
  strokeWeight(1);
  fill("yellow");
  rect(hammer_x, hammer_y, 25, 70);
  strokeWeight(0);
  ellipse(hammer_x + 12.5, hammer_y + 70, 25, 5);
  strokeWeight(1);
  stroke("LightSkyBlue");
  line(hammer_x, hammer_y, hammer_x + 25, hammer_y + 17);
  line(hammer_x, hammer_y + 17, hammer_x + 25, hammer_y + 34);
  line(hammer_x, hammer_y + 34, hammer_x + 25, hammer_y + 51);
  line(hammer_x, hammer_y + 51, hammer_x + 25, hammer_y + 68);
  stroke(46, 46, 46);
  fill(64, 64, 64);
  rect(hammer_x - 17.5, hammer_y - 27, 60, 27);
  strokeWeight(0);
  ellipse(hammer_x - 17.5, hammer_y - 13.5, 12, 27);
  strokeWeight(1);
  ellipse(hammer_x + 42.5, hammer_y - 13.5, 12, 27);
}
var x_wert;
var y_wert;
var treffer = 0;
var zufallszahl = 0;

function setup() {
  createCanvas(800, 800);
  background(57, 53, 50);
  frameRate(50);
}

function draw() {
  background(57, 53, 50);
  stroke("Black");
  strokeWeight(3);

  /*Linie2*/
  line(255, 0, 250, 322);
  /*Linie1*/
  line(0, 300, 250, 0);
  /*Linie3*/
  line(0, 800, 300, 230);
  /*Linie4*/
  line(300, 0, 300, 230);
  /*Linie5*/
  line(300, 230, 550, 230);
  /*Linie6*/
  line(550, 0, 550, 230);
  /*Linie7*/
  line(550, 230, 800, 800);
  /*Linie8*/
  line(600, 0, 800, 272);

  /*T r*/
  stroke("Black");
  fill("Black");
  quad(250, 0, 300, 0, 300, 230, 250, 322);

  /*Tisch*/
  stroke("Black");
  fill("Black");
  quad(230, 375, 570, 375, 620, 675, 180, 675);
  /*Spielfl che*/
  fill("White");
  quad(250, 395, 550, 395, 595, 655, 205, 655);
  /*Tischbeine*/
  fill("Black");
  rect(180, 675, 25, 125);
  rect(595, 675, 25, 125);
  /*Tischkante*/
  fill(43, 104, 123);
  rect(205, 675, 390, 15);
  /*Bildschirm*/
  stroke(43, 104, 123);
  fill("Black");
  rect(230, 225, 340, 150);
  fill("White");
  rect(250, 255, 300, 90);

  /*Poster*/
  stroke("Black");
  fill("White");
  /*Poster2*/
  quad(115, 185, 199, 80, 199, 255, 115, 375);
  fill("Yellow");
  quad(115, 185, 199, 80, 115, 375, 199, 255);
  /*Poster1*/
  fill("LightBlue");
  quad(0, 330, 80, 230, 80, 430, 0, 545);
  stroke("Black");
  line(38, 375, 38, 432);
  line(28, 469, 38, 432);
  line(52, 441, 38, 432);
  line(20, 419, 52, 375);
  /*Kopf*/
  ellipse(35, 370, 17, 20);
  /*Pistole*/
  line(52, 370, 52, 385);
  line(50, 370, 65, 355);
  /*Hitman*/
  stroke("Black");
  line(3, 332, 3, 358);
  line(12, 322, 12, 348);
  line(3, 345, 12, 335);
  line(18, 312, 18, 341);
  line(28, 302, 28, 330);
  line(23, 308, 32, 298);
  line(36, 293, 36, 322);
  line(36, 293, 40, 302);
  line(40, 302, 45, 281);
  line(45, 281, 45, 311);
  line(52, 275, 52, 303);
  line(52, 275, 58, 267);
  line(52, 287, 58, 279);
  line(58, 267, 58, 296);
  line(64, 259, 64, 290);
  line(64, 259, 69, 283);
  line(69, 255, 69, 283);
  /*Text*/

  fill("Black");
  textSize(30);
  textAlign(CENTER);
  text("Score: " + treffer, 370, 310);

  if (frameCount % 30 == 0) {
    zufallszahl = floor(random(1, 6));
  }
  if (zufallszahl == 1) {
    kreisezeichnen("DeepSkyBlue", 325, 450, 50);
  } else {
    kreisezeichnen("Black", 325, 450, 50);
  }
  if (zufallszahl == 2) {
    kreisezeichnen("dodgerblue", 475, 450, 50);
  } else {
    kreisezeichnen("Black", 475, 450, 50);
  }
  if (zufallszahl == 3) {
    kreisezeichnen("SkyBlue", 400, 520, 50);
  } else {
    kreisezeichnen("Black", 400, 520, 50);
  }
  if (zufallszahl == 4) {
    kreisezeichnen("CornFlowerBlue", 325, 595, 50);
  } else {
    kreisezeichnen("Black", 325, 595, 50);
  }
  if (zufallszahl == 5) {
    kreisezeichnen("RoyalBlue", 475, 595, 50);
  } else {
    kreisezeichnen("Black", 475, 595, 50);
  }

  /*Pfeil*/
  stroke(179, 238, 58);
  fill(179, 238, 58);
  triangle(/*1*/ 390, 45, 390, 65, 409, 68);
  triangle(/*2*/ 409, 45, 409, 70, 391, 68);
  quad(390, 100, 410, 100, 410, 68, 390, 68);
  strokeWeight(22);
  stroke(179, 238, 58);
  point(400, 105);
  strokeWeight(0);
  quad(/*1*/ 397, 116, 397, 90, 370, 90, 370, 116);
  triangle(370, 125, 370, 80, 345, 100);

  /*wei e Umrandung*/
  stroke("White");
  strokeWeight(4);
  line(/*1*/ 390, 45, 400, 52);
  line(/*2*/ 409, 45, 400, 52);
  line(/*3*/ 390, 45, 390, 90);
  line(/*4*/ 410, 45, 410, 110);
  line(/*5*/ 390, 90, 370, 90);
  line(/*6*/ 405, 115, 370, 115);
  line(/*7*/ 370, 125, 370, 115);
  line(/*8*/ 370, 80, 370, 90);
  line(/*9*/ 345, 100, 370, 80);
  line(/*10*/ 345, 100, 370, 125);
  line(/*Kurve*/ 405, 115, 410, 110);

  fill("Black");
  strokeWeight(0);
  textSize(15);
  textAlign(CENTER);
  text("E", 400, 68);
  text("X", 400, 83);
  text("I", 400, 98);
  text("T", 400, 113);
  textSize(10);
  text("Way", 380, 100);
  text("Out", 380, 110);

  hammer(mouseX, mouseY);
}

function mousePressed() {
  if (dist(475, 595, mouseX, mouseY) < 50 && zufallszahl == 5) {
    treffer = treffer + 1;
  }

  if (dist(325, 595, mouseX, mouseY) < 50 && zufallszahl == 4) {
    treffer = treffer + 1;
  }

  if (dist(400, 520, mouseX, mouseY) < 50 && zufallszahl == 3) {
    treffer = treffer + 1;
  }

  if (dist(475, 450, mouseX, mouseY) < 50 && zufallszahl == 2) {
    treffer = treffer + 1;
  }

  if (dist(325, 450, mouseX, mouseY) < 50 && zufallszahl == 1) {
    treffer = treffer + 1;
  }
}

function kreisezeichnen(farbe, koordx, koordy, durchmesser) {
  /*Felder*/
  fill(farbe);
  ellipse(koordx, koordy, durchmesser, durchmesser);
}

function hammer(hammer_x, hammer_y) {
  stroke("Black");
  strokeWeight(1);
  fill("yellow");
  rect(hammer_x, hammer_y, 25, 70);
  strokeWeight(0);
  ellipse(hammer_x + 12.5, hammer_y + 70, 25, 5);
  strokeWeight(1);
  stroke("LightSkyBlue");
  line(hammer_x, hammer_y, hammer_x + 25, hammer_y + 17);
  line(hammer_x, hammer_y + 17, hammer_x + 25, hammer_y + 34);
  line(hammer_x, hammer_y + 34, hammer_x + 25, hammer_y + 51);
  line(hammer_x, hammer_y + 51, hammer_x + 25, hammer_y + 68);
  stroke(46, 46, 46);
  fill(64, 64, 64);
  rect(hammer_x - 17.5, hammer_y - 27, 60, 27);
  strokeWeight(0);
  ellipse(hammer_x - 17.5, hammer_y - 13.5, 12, 27);
  strokeWeight(1);
  ellipse(hammer_x + 42.5, hammer_y - 13.5, 12, 27);
}
