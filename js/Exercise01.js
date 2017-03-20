//variables: gotta have an empty one for the squares??? 
//function: create a big square and then split it up into a bunch of different squares that are super tiny OR should it be a bunch of cells in a table 
//and then another function for the colors --> if x then y, so the colors are in the circle 
//orrrr as it goes left to right, rainbow and goes up to down 
//draw it 
//loop within a loop


function setup(){
	createCanvas(800, 500);
}

function draw(){
	background(0);
	var cellColor = color('hsb(160, 100%, 50%)'); //here, define the cellColor from cell position or other value (if, else) 
	fill(cellColor);
	var y = 50;
	for (y = 0; y < height ; y+=50) 
	for (x = 0; x < width ; x+=50) {
		rect(x,y,50,50)
	}
}