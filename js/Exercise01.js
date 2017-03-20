//variables: gotta have an empty one for the squares??? 
//function: create a big square and then split it up into a bunch of different squares that are super tiny OR should it be a bunch of cells in a table 
//and then another function for the colors --> if x then y, so the colors are in the circle 
//orrrr as it goes left to right, rainbow and goes up to down 
//draw it 
//loop within a loop

function setup(){
	createCanvas(400, 400);
	colorMode(HSB, 1);
}

function draw(){
	background(0);
	noStroke();
	var y = 10;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
	rect(x,y,10,10); //draws the recurring rectangles based on x & y that were defined earlier 
  	//does the fill to be a gradient rainbow 
  	var ratio = x/height;
  	var hue = ratio;
  	var saturation = 1;
  	var brightness = 1;
  	fill(hue, saturation, brightness );
  }
}