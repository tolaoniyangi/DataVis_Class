//**** global variable ****//
var apiKey = '7db2c379e5eccdbe63af88ebaa03ea48';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var humidity = 0;
var windSpeed = 0;
var cityName=0; 
var clouds = 0;
var button;
var iconRain = [];
var iconWind = [];

function preload(){
  sunny[0]=loadImage("../img/summerWsunglasses.png"); //sunny
  sunny[1]=loadImage("../img/sunny2.png"); //sunny+cloudy
  winter=loadImage("../img/winter_bundledup.png"); 
  rainy=loadImage("../img/rainyday.png"); 
  spring=loadImage("../img/feelslikespring.png"); 
  fall=loadImage("../img/fall_dressing.png"); 
}

//**** Setup function ***//
function setup(){
  button = select ('#submit'); //# represents the id of the button 
  city = select ('#city');
  button.mousePressed(queryAPI); //linking queryAPI to the button
}

function getWeatherData(apiData){
  weatherData = apiData;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  windSpeed = weatherData.wind.speed;
  clouds = weatherData.clouds.all;
  cityName = weatherData.name;
}

function queryAPI(){ //building the url and loading the json in this function 
  var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units; //city.value() lets it take whatever element in the value and link it
  loadJSON(query, getWeatherData); //once you've loaded the query, then do this: get weather data
}

function draw(){
  var canvas=createCanvas(800,800);
  canvas.position(150,250);//left, top
  canvas.background(255); //so it erases everything 
    fill(0);
    noStroke();
  
  //drawing the sketch 
  if(weatherData){ //need this if loop so it only works when there is values for the data 
    //CITY NAME + temp 
    // headingCity=createElement('h1', cityName) //so the element is h1 in css/html too
    // headingCity.position(200,200); //y, x 

    // numberTemp=createElement ('h2', temperature + 'C' )
    // numberTemp.position(150,200);

    // headingTemp=createElement ('h3', 'TEMPERATURE')
    // headingTemp.position(150,150);

    // textClouds=createElement ('h3', 'CLOUDS' + clouds + '%')
    // textClouds.position(160,160);

    // // WIND icon + text 
    // headingWeather=createElement('h4', 'WIND SPEED: ' + windSpeed + 'm/s')
    // headingWeather.position(100,100);

    if (humidity >= 75 && clouds >= 75){
      image(rainy, 50, 50); //50,50 indicates the position of the image on the screen
      subtitle=createElement('h4', "Looks like it's gonna rain today. Don't forget your umbrella! ")//rain gear 
      subtitle.position(500,160); //x,y position
    };

    if (windSpeed < 6.7 && temperature >= 18 && clouds <= 50){
      image(sunny[0], 50, 50);
      subtitle=createElement('h4', "It's beautiful today. Don't forget your sunglasses!") //sundress/shorts + sunglasses
      subtitle.position(100,100);
    };

    if (windSpeed < 6.7 && temperature >= 18 && clouds > 50){
      image(sunny[1], 50, 50);
      subtitle=createElement('h4', "It's warm and nice today, although a bit cloudy.") //sundress/shorts 
      subtitle.position(100,100);
    };

    if (windSpeed < 6.7 && temperature >= 12 && temperature < 18){
      image(fall, 50, 50);
      subtitle=createElement('h4', "The weather is pretty amazing today - not too hot, not too cold.") //jeans + light sweater 
      subtitle.position(100,100);
    };

    if (windSpeed >= 11.2 && humidity < 25 && clouds >= 75 && temperature <= 5){
      image(spring, 50, 50);
      subtitle=createElement('h4', "Feels like spring!") //parka/spring outfit 
      subtitle.position(100,100);
    };

    if (windSpeed >= 6.7 && windSpeed < 11.2 && humidity >= 75 && clouds >= 75 && temperature <= 5){
      image(winter, 50, 50);
      subtitle=createElement('h4', "It's cold today - bundle up.") //winter clothes eg northface 
      subtitle.position(100,100);
    };

  //   if (windSpeed <= 1.5){
  //     image(iconWind[1], 50, 50);
  //   };

  //   if (windSpeed < 0.5){
  //     image(iconWind[2], 50, 50);
  //   }

  //   //HUMIDITY
  //   headingWeather=createElement('h3', 'HUMIDITY: ' + humidity + '%')
  //   headingWeather.position(400,100);

  //   if (humidity >= 75){
  //     image(iconRain[0], 50, 50);
  //     subtitle=createElement('p', "Feels like rain");
  //     subtitle.position(150,150);
  //   };

  //   if (humidity >= 50){
  //     image(iconRain[1], 50, 50);
  //   };

  //   if (humidity < 50){
  //     image(iconRain[2], 50, 50);
  //   }
  }
}