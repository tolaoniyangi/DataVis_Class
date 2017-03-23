function setup(){
	colorMode(RGB,1);
}

function draw(){
	createCanvas(400,400);
	stroke('black');
	strokeWeight(.5)

	for (y = 0; y < height ; y+=19) //y+=25 refers to the spacing in between circles
	for (x = 0; x < width ; x+=19) {
    
    	for (var i = 0; i<100; i++) {
    		if (mouseX<400 && mouseY<400 && mouseY>3){ //&&=and, ||=or
     			var d = int(dist(x, y, mouseX, mouseY)); //distance from the center of each circle to the position of the mouse
    		}

    		else {
    			var d = 200;
    		}
    	};
  		
  		//setting up
	    var calcRadius;
	    for (var i = 0; i < 100; i++) {    		
	    	calcRadius=d/21;
	    } 

    	var calcColor;
    	for (var i = 0; i < 100; i++) {    		
	    	if (mouseX<400 && mouseY<400 && mouseY>3){ //&&=and, ||=or
	    		calcColor=(255,255,255,d/550);
    		}
    		else {
    			calcColor=('rgba(255,100,20,0.9)');
    		}
	    } 

	    //drawing it 
		ellipse(x,y,calcRadius,calcRadius);
		fill(calcColor);
	}
}