//**** global variable ****//
var stationInfoURL = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
// var stationStatusURL = 'https://gbfs.citibikenyc.com/gbfs/en/station_status.json';
var stationInfoData;
var stationStatusData;
// var button;
var stationName;
var getStationData;

//**** Setup function ***//
function setup(){ //load data in here
    createCanvas(800,800);
    // button = select ('#submit'); //# represents the id of the button 
    // stationName = select ('#stationName');
    // button.mousePressed(queryAPI); //linking queryAPI to the button 
    var query = stationInfoURL + stationName; //x.value() lets it take whatever element in the value and link it
    loadJSON(stationInfoURL, getStationData); //loadJSON (url, callback). getStationData is the callback function 
}   //jsonp allows you to bypass the problem w https

function getStationData(apiData){ //callback for loading the data /executing the function, apiData=variable that stores this new data 
    stationData = apiData; //so stationdata now stores everything in API data 
    // stationName = stationData.name;
    // stationID = stationData.data.stations.station_id;
    console.log(stationData);
        background(0);
        for (var i = 0; i < stationData.number; i++) {
            fill(255);
            ellipse(random(width), random(height), 19, 19)
        };
}

// function queryAPI(){ //building the url and loading the json in this function 
//     var query = stationInfoURL + stationName.value(); //city.value() lets it take whatever element in the value and link it
//     loadJSON(query, getStationData); //once you've loaded the query, then do this: get weather data
// }