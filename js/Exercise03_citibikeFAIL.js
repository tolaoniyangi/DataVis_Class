var name;
var stationInfoURL;
var station_id=72;
var data;
var stations;
var stationInfoData;

//setup
function loadJSON(url,callback){
    // createCanvas(500,500);

    //getting JSON citibike data via AJAX 
    var stationInfoRequest=new XMLHttpRequest();
        stationInfoRequest.overrideMimeType("application/json");
        stationInfoRequest.open('GET', 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json',true); //argument to recieve or download data
        stationInfoRequest.onreadystatechange=function(){
        if (stationInfoRequest.readyState ==4 && stationInfoRequest.status == "200") {
            callback(stationInfoRequest.responseText);
        } //so the problem is that it keeps bringing it out as undefined values so fuck this shit 
    };
    stationInfoRequest.send(null); //sends the request 
    
    
    var stationStatusRequest=new XMLHttpRequest();
    stationStatusRequest.open('GET', 'https://gbfs.citibikenyc.com/gbfs/en/station_status.json');
    stationStatusRequest.onload=function(){
        var stationStatusData=JSON.parse(stationStatusRequest.responseText);
        console.log(stationStatusData);
    }
    stationStatusRequest.send();
}

function init(){
    loadJSON('https://gbfs.citibikenyc.com/gbfs/en/station_information.json',function(response){
        var stationInfoData=JSON.parse(response); // so we've defined our request and parsed it so it treats it as objects not a blob of text+ saved it to a variable 
        console.log(stationInfoData);
        var obj = JSON.parse(response);
        obj.result;
    });
    console.log(obj.result);

}

// function queryAPI(){ //building the url and loading the json in this function 
//     var query = stationInfoURL + data.stations.station_id.value(); //city.value() lets it take whatever element in the value and link it
//     loadJSON(query, getWeatherData); //once you've loaded the query, then do this: get weather data
// }

// function draw(){
//     background(255); //so it erases everything 
//     fill(0);
//     noStroke();
//     if(stationStatusData){
//         ellipse(20,20,station_id,station_id * 10)
//     }

// }