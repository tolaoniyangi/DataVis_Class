//**** global variable ****//
var apiKey = '7db2c379e5eccdbe63af88ebaa03ea48';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var humidity = 0;
var button;
var iconRain = [];
var iconWind = [];
var canvas;

function preload(){
  iconRain[0]=loadImage("../img/nature.jpg"); //max humidity 
  iconRain[1]=loadImage("../img/netherlands.jpg"); //med humidity 
  iconRain[2]=loadImage("../img/censorship.jpg"); //low humidity 
}

//**** Setup function ***//
function setup(){
  button = select ('#submit'); //# represents the id of the button 
  city = select ('#city');
  button.mousePressed(queryAPI); //linking queryAPI to the button
  // noLoop();
}

function getWeatherData(apiData){
  weatherData = apiData;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  windSpeed=weatherData.wind.speed;
  cityName=weatherData.name;
  createElement('h1', 'CITY: ' + cityName + '</br></br>TEMPERATURE: ' + temperature + 'C' + '</br></br>HUMIDITY: ' + humidity + '%' + '</br></br>WIND SPEED: ' + windSpeed + 'mph'); //h1 is the id, this prints to screen 
    
  //drawing the icons 
  // createCanvas(200,200);

  var canvas=createCanvas(200,200);
  canvas.position(100,120);
  h1=createElement('h1', 'HUMIDITY: ' + humidity + '%')
  h1.position(100,100);

  background(255); //so it erases everything 
    fill(0);
    noStroke();

  if (humidity >= 75){
    image(iconRain[0], 0, 0);
    // subtitle=createElement('p', "Feels like rain")
  };

  if (humidity >= 50){
    image(iconRain[1], 0, 0);
  };

  if (humidity < 50){
    image(iconRain[2], 0, 0);
  }
}

function queryAPI(){ //building the url and loading the json in this function 
  var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units; //city.value() lets it take whatever element in the value and link it
  loadJSON(query, getWeatherData); //once you've loaded the query, then do this: get weather data
}
