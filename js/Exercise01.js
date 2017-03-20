//variables: gotta have an empty one for the squares??? 
//function: create a big square and then split it up into a bunch of different squares that are super tiny OR should it be a bunch of cells in a table 
//and then another function for the colors --> if x then y, so the colors are in the circle 
//orrrr as it goes left to right, rainbow and goes up to down 
//draw it 
//loop within a loop

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup(){
	createCanvas(400, 400);
	colorMode(HSB, 360, 100, 100);
	
	// Define colors
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw(){
	background(0);
	// for repeating squares
	stroke(0);
	var y = 10;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		rect(x,y,10,10); //draws the recurring rectangles based on x & y that were defined earlier 
 
  // Foreground
  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}