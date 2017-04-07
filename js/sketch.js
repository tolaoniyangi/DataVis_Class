// ****** Glovbal cariables
var nervousBall=[]; //Declaring object 
var blackWhole;

// ****** Setup function 
function setup(){
    createCanvas(800,800);
    for (var i = 0; i <100; i++) { //so were creating 100 balls
        nervousBall.push(new Jitter());
    };
    colorMode(HSB);
    blackWhole=createVector(400,400); //x, y
}

function Jitter (){
    // properties 
    this.position = createVector(random(0,width), random(0,height))
    this.diameter=30;
    this.speed=random(-4,10); //setting speed as a random number from -4 to 10
    stroke(1);
    this.hue=random(0,360);
    this.panic= false; //jitterball panics if it is too close to the black hole 
    this.direction = createVector(random(-3,3), random(-3,3)); //creating a new vector that is the vector of the direction 

    // functions
    this.display=function(){
        ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
        fill(this.hue,360,360);
        if (this.panic==false){ //boolean takes ==
            this.diameter=10; //assigning value takes = 
        }
        else{
            this.diameter=100;
        }
    }

    this.update=function(){
        if (this.position.x > width){
            this.position.x=0;
        }
        if (this.position.x < 0){
            this.position.x=width;
        }

        if (this.position.y > height){
            this.position.y=0;
        }
        if (this.position.y < 0){
            this.position.y=height;
        }

        this.position=this.position.add(this.direction);
        // this.position.x=this.position.x+random(-this.speed,this.speed); //these gave it the jitters
        // this.position.y=this.position.y+random(-this.speed,this.speed);
    }

    this.calculateDistance = function(){
        var distance=this.position.dist(blackWhole); //distance between position and the black hole
        if (distance < 100){
            this.panic=true;
        }
        else{
            this.panic=false;
        }
    }
}

// ****** draw function 
function draw(){
    fill(0,100,100,0.2);
    rect(0,0,width-40,height-40);
    // background(0,100,20);
    for (var i = 0; i < 100; i++) { //number of balls
        nervousBall[i].calculateDistance(); //need to call the functions 
        nervousBall[i].display();
        nervousBall[i].update();    
    }
    fill(0);
    ellipse(blackWhole.x, blackWhole.y, 75, 75); //using x and y of the vector to draw an ellipse
}