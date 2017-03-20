var value=0;

function setup(){
	createCanvas(400, 400);
	// colorMode(HSB,1);
}

//have to do on mouse hover, circle is 20 and the farther away from hover the smaller the circle is (to like 0)
function draw(){
	noStroke();
	var y = 10;
	for (y = 0; y < height ; y+=10) 
	for (x = 0; x < width ; x+=10) {
		ellipse(x,y,10,10); 
	 //  	var ratio = x/width;
	 //  	var hue = ratio;
	 // 	for (var i = y ; i <= height; i++) {
		//     var saturation = map(i, y, y+height, 1, 0); //why the cell in the top left corner was not being affected by the loop until i added no loop because it was drawing continuously/restarting
	 //    }
		// var brightness = 1;
	 //  	fill(hue, saturation, brightness);
    } 

    var x2 = x;
  	var y2 = y;
  	var x1 = mouseX;
  	var y1 = mouseY;
    //dist= the distance from point 1 to point 2.
    var d = int(dist(x1, y1, x2, y2)); //distance between the position of the mouse and the center of each circle
	
	for (i = d; i <= height; i++) {
	  	ellipse(x, y, d*10, d*10); //or maybe map it so that the size changes based on the color change as you move away from the center ie based on distance
	};

    fill(value);
}

function mouseMoved() {
	  value = value + 5; //color changes but need to be able to control it so it's darker as you move away from the circle
	  if (value > 255) {
	    value = 0;
	  }
	  return false;

	  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

    
