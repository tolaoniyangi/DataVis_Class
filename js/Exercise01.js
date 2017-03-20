function setup(){
	createCanvas(400, 400);
	colorMode(HSB,1);
}

function draw(){
	background(0);
	noStroke();
	var y = 10;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		rect(x,y,10,10); //draws the recurring rectangles based on x & y that were defined earlier 
	 //does the fill to be a gradient rainbow 
	  	var ratio = x/width;
	  	var hue = ratio;
	 	for (var i = y; i <= height; i++) {
		    var saturation = map(i, y, y+height, 1, 0); //figure out why the cell in the top left corner is going to black
	    }
		var brightness = 1;
	  	fill(hue, saturation, brightness);
    } 
}