function draw(){
	createCanvas(400,400);
	stroke('black');
	strokeWeight(.5)

	for (y = 0; y < height ; y+=17) //y+=25 refers to the spacing in between circles
	for (x = 0; x < width ; x+=17) {
    
    	//dist= the distance from point 1 to point 2.
    	var d = int(dist(x, y, mouseX, mouseY)); //distance between the position of the mouse and the center of each circle

	    var calcRadius;
	    for (var i = 0; i < 100; i++) {    		
	    	if (d<800) {
	    		calcRadius=d/20;
	    	}
	    	else {
	    		calcRadius=5;
	    	}
	    } 
    // var calcColor = 

		ellipse(x,y,calcRadius,calcRadius);
		fill('gray');
	}
}