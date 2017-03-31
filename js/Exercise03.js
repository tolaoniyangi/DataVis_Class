//**** global variable ****//
var apiKey = '7db2c379e5eccdbe63af88ebaa03ea48';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var humidity = 0;
var button;

//**** Setup function ***//
function setup(){
    createCanvas(800,800);
    button = select ('#submit'); //# represents the id of the button 
    city = select ('#city');
    button.mousePressed(queryAPI); //linking queryAPI to the button 
}

function getWeatherData(apiData){
    weatherData = apiData;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
    console.log(weatherData);
}

function queryAPI(){ //building the url and loading the json in this function 
    var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units; //city.value() lets it take whatever element in the value and link it
    loadJSON(query, getWeatherData); //once you've loaded the query, then do this: get weather data
}

//*** Draw function ***// 
function draw(){
    background(255); //so it erases everything 
    fill(0);
    noStroke();
    // console.log(weatherData); -- if this is in the draw function, it loops over and over again so have it in the getweatherdata function
    if (weatherData){ //if weatherData is true then draw. f it is undefined don't draw
        ellipse (200,200, temperature * 10, temperature * 10)
    }
}