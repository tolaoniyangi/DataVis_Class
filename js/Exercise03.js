//**** global variable ****//
var apiKey = '7db2c379e5eccdbe63af88ebaa03ea48';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var humidity = 0;
var button;
var icon = [];

function preload(){
  icon[0]= loadImage("../img/nature.jpg"); 
  icon[1]=loadImage("../img/netherlands.jpg");
}

//**** Setup function ***//
function setup(){
    createCanvas(720,400);
    button = select ('#submit'); //# represents the id of the button 
    city = select ('#city');
    button.mousePressed(queryAPI); //linking queryAPI to the button
    noLoop();
}

function getWeatherData(apiData){
    weatherData = apiData;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    windSpeed=weatherData.wind.speed;
    cityName=weatherData.name;
    createElement('h1', 'CITY: ' + cityName + '</br></br>TEMPERATURE: ' + temperature + 'C' + '</br></br>HUMIDITY: ' + humidity + '%' + '</br></br>WIND SPEED: ' + windSpeed + 'mph'); //h1 is the id, this prints to screen 
    if (humidity>50) {
    image(icon[0], 0, 0);
  };
}

function queryAPI(){ //building the url and loading the json in this function 
  var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units; //city.value() lets it take whatever element in the value and link it
  loadJSON(query, getWeatherData); //once you've loaded the query, then do this: get weather data
}

function draw(queryAPI){
  // if (humidity>50) {
  //   image(icon[0], 0, 0);
  // };
  
}