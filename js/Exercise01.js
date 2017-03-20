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
	  	var saturation = 1;
	  	var brightness = 1;
	 
		for (var i = y; i <= height; i++) {
		    var alpha = map(i, y, y+height, 0, 1); //figure out how to switch this from mapping to black to mapping from low to high opacity + why the cell in the top left corner is going to black
	    }
	    //1 is fully transparent, 0 is fully opaque
	  	fill(hue, saturation, brightness, alpha);
    } 
}