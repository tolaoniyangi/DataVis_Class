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
var sunny = [];

function preload(){
  sunny[0]=loadImage("../img/summerWsunglasses.png"); //sunny
  sunny[1]=loadImage("../img/sunny2.png"); //sunny+cloudy
  winter=loadImage("../img/winter_bundledup.png"); 
  rainy=loadImage("../img/rainyday.png"); 
  spring=loadImage("../img/feelslikespring.png"); 
  fall=loadImage("../img/fall_dressing.png"); 
  fallwinter=loadImage("../img/fallwinter.png"); 
  summersummer=loadImage("../img/summersummer.png"); 
  averageweather=loadImage("../img/averageweather.png");  
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
  var canvas=createCanvas(800,800); //x, y
  canvas.position(150,200);//left, top
  canvas.background(255); //so it erases everything 
    fill(0);
    noStroke();

  //drawing the sketch 
  if(weatherData){ //need this if loop so it only works when there is values for the data 
    fill(0);
    noStroke();

    // CITY NAME + temp 
    headingCity=createElement('h1', cityName) //so the element is h1 in css/html too
    headingCity.position(500,250); //x, y ; comes first 

    numberTemp=createElement ('h2', temperature + 'C' ) //middle, large 
    numberTemp.position(500,220);

    headingTemp=createElement ('h3', 'TEMPERATURE') //right under the actual temperatire reading 
    headingTemp.position(500,330);

    //CLOUDS 
    textClouds=createElement ('h5', 'Clouds: ' + clouds + '%')
    textClouds.position(500,350);

    // WIND icon + text 
    headingWeather=createElement('h5', 'Wind Speed: ' + windSpeed + 'm/s')
    headingWeather.position(500,380);

    //HUMIDITY
    headingWeather=createElement('h5', 'Humidity: ' + humidity + '%')
    headingWeather.position(500,410);

    if (humidity >= 75 && clouds >= 75){
      image(rainy, 0, 0); //50,50 indicates the position of the image on the screen
      subtitle=createElement('h4', "Looks like it's gonna rain today. Don't forget your umbrella! ")//rain gear 
      subtitle.position(500,160); //x,y position
    }

    else if (windSpeed < 6.7 && temperature >= 18 && clouds <= 50){
      image(sunny[0], 0, 0);
      subtitle=createElement('h4', "It's beautiful today. Don't forget your sunglasses!") //sundress/shorts + sunglasses
      subtitle.position(500,160);
    }

    else if (windSpeed < 6.7 && temperature >= 18 && clouds > 50){
      image(sunny[1], 0, 0);
      subtitle=createElement('h4', "It's warm and nice today, although a bit cloudy.") //sundress/shorts 
      subtitle.position(500,160);
    }

    else if (windSpeed < 6.7 && temperature >= 12 && temperature < 18){
      image(fall, 0, 0);
      subtitle=createElement('h4', "The weather is pretty amazing today - not too hot, not too cold.") //jeans + light sweater 
      subtitle.position(500,160);
    }

    else if (windSpeed >= 11.2 && humidity < 25 && clouds >= 75 && temperature <= 5){
      image(spring, 0, 0);
      subtitle=createElement('h4', "Feels like spring!") //parka/spring outfit 
      subtitle.position(500,160);
    }

    else if (windSpeed >= 6.7 && windSpeed < 11.2 && humidity >= 75 && clouds >= 75 && temperature <= 5){
      image(winter, 0, 0);
      subtitle=createElement('h4', "It's cold today - bundle up.") //winter clothes eg northface 
      subtitle.position(500,160);
    }
    //general
    else if (temperature <=5){
      image(winter, 0, 0);
      subtitle=createElement('h4', "It's cold today - bundle up.") //winter clothes eg northface 
      subtitle.position(500,160);
    }

    else if (temperature <= 12 && temperature > 5){
      image(fallwinter, 0, 0);
      subtitle=createElement('h4', "It's a bit chilly today ") //winter clothes eg northface 
      subtitle.position(500,160);
    }

    else if (temperature < 18 && temperature > 12){
      image(averageweather, 0, 0);
      subtitle=createElement('h4', "It's not too hot, not too cold. Enjoy!") //winter clothes eg northface 
      subtitle.position(500,160);
    }

    else if (temperature >= 18){
      image(summersummer, 0, 0);
      subtitle=createElement('h4', "HOT HOT HOT today") //winter clothes eg northface 
      subtitle.position(500,160);
    }
  }
}