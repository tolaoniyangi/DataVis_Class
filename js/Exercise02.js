function setup(){
	createCanvas(400, 400);
	// colorMode(HSB,1);
}

function draw(){
	stroke('black');
	strokeWeight(1)

	var x=20;
    var y=20;

    //dist= the distance from point 1 to point 2.
    var d = int(dist(x, y, mouseX, mouseY)); //distance between the position of the mouse and the center of each circle
    print(d) //d goes up to like 400+ in the canvas

    //radius and color of circle based on position relative to mouse 
    var calcRadius = 0;
    for (var d = 0; d < 100; d++) {    	
    	while (d>400) {
    		calcRadius=7;
    	}
    	while (d<=400) {
    		calcRadius=d/100;
    	};
    }

    var distCenter = int(dist(x,y,calcRadius,calcRadius));
    // var calcColor = 
    
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		ellipse(x,y,calcRadius,calcRadius);
		// fill('blue');
	}

	// function mouseMoved() {
	//   value = value + 5; //color changes but need to be able to control it so it's darker as you move away from the circle
	//   if (value > 255) {
	//     value = 0;
	//   }
	//   return false;

	//   if (d < 100) {
 //    // Pick new random color values
 //    r = random(255);
 //    g = random(255);
 //    b = random(255);
 //  }

}