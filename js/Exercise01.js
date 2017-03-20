function setup(){
	createCanvas(400, 400);
	colorMode(HSB,1);
	noLoop(); //The noLoop() function causes draw() to only execute once. Without calling noLoop(), the code inside draw() is run continually.
}

function draw(){
	noStroke();
	var y = 10;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		rect(x,y,10,10); //draws the recurring rectangles based on x & y that were defined earlier 
	 	//does the fill of the rectangles to be a gradient rainbow 
	  	var ratio = x/width;
	  	var hue = ratio;
	 	for (var i = y ; i <= height; i++) {
		    var saturation = map(i, y, y+height, 1, 0); //why the cell in the top left corner was not being affected by the loop until i added no loop because it was drawing continuously/restarting
	    }
		var brightness = 1;
	  	fill(hue, saturation, brightness);
    } 
}