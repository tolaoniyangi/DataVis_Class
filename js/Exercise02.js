function setup(){
	createCanvas(400, 400);
	// colorMode(HSB,1);
	// noLoop();
}

function draw(){
	stroke('black');
	strokeWeight(1)

    //dist= the distance from point 1 to point 2.
    var d = int(dist(x, y, mouseX, mouseY)); //distance between the position of the mouse and the center of each circle

    //radius and color of circle based on position relative to mouse 
    var calcRadius = 0;
    for (var i = 0; i < 100; i++) {    	
    	if (d>100) {
    		calcRadius=7;
    	}
    	else{
    		calcRadius=d/50;
    	};
    }

    // var calcColor = 
    var x=20;
    var y=20;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		ellipse(x,y,calcRadius,calcRadius);
		// fill('blue');
	}
}
