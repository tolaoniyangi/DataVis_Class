// command+backslash to comment or just type two backslashes
//build function, call it in setup 
//very similar to Python

//numbers and booleans don't need quotes, string does

var myFirstVariable = 20;
var secondVariable = 35;
var myName = "tola's car";
var amIamerican = false; //boolean
var numbers = [12, 214, 523, 625] //array, needs square bracket
var myObject = {name: "tola", lastName: "Oniyangi", age: 21, nigerian: true}//object, use consistent quotes either double or single
var x5= "not mystery value" //global variable
var circleSize = 40;

//Javascript is asynchronous i.e. it runs all the functions at the same time - the preload function forces it to run whatever first 
// function preload(){ 

// }

function myFirstFunction (x1,x2,x3){ //defines the function
	var x4= x1*x2*x3; //gonna multiply the three variables
	var x5='mysteryvalue'; //local variable, cannot be called in another function
	return x4; //does not print
}

function setup(){
	// console.log(myFirstVariable); // console log prints to my console
	// print(myFirstVariable); // prints to my console
	// var thirdVariable = myFirstVariable + secondVariable; --> this adds the numbers to 35
	//var thirdVariable = myFirstVariable + myName +secondVariable; // appends my name to it and treats as text (everything as text if before addition of numbers), treats them in order 
	//print(thirdVariable);
	//print(typeof(thirdVariable));
	//print(numbers[0]); //to get the first number out of the array (first position)
	//print(myObject["name"]); //how to print something from an object, use consistent quotes either double or single
	//print(myFirstFunction(2,4,5)); //calls the function
	createCanvas(500,500); //creating drawing space of 500 by 500
	// for (var i=0; i<100; i++){ //loop: for variabe i that equals 0, when i <100 do a couple of things ie add 1 to i and then prints it --at the end it prints 0 up to 99
	// 	print(i);
	// }
	var i=0;
	while (i<100){ //exactly same as loop above but different way of writing it
		print(i);
		i++
	}
} 


function draw (){
	// print(myFirstVariable); //prints to my console many times
	// background(0, 100, 100); //gives background in rgb
	// if (mouseIsPressed){
	// 	fill(250);
	// }
	// else{
	// 	fill(0);
	// }
	// stroke(200,0,50);
	// strokeWeight(5);
	// //ellipse(mouseX, mouseY, 20, 20); //takes four values - x is wherever my mouse is, y is wherever my mouse is, width, height
	// ellipse(mouseX, mouseY, circleSize, circleSize);
}