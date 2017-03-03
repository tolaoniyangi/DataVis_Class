// ***** Global variables ***** //
var victimsTable;
var yearlyTable;
var maxTotal =[];
var maxLabel=[];
var maxLength=550;

// ***** Preload function ***** //
function preload(){
    victimsTable = loadTable('../data/ColombiaVictims_Indigenous_2000.csv', 'csv', 'header');
    yearlyTable = loadTable('../data/ColombiaVictims_Indigenous_ByYear.csv', 'csv', 'header');
    console.log('Done loading table...');
}

function setup() {

  var Count=victimsTable.getRowCount();
  print (Count) 

  var CountYearly=yearlyTable.getRowCount();
  print (CountYearly) 

  //calling out the columns to work with
  totalYear=[]
  for (var i = 0; i<CountYearly ; i++) {
    totalYear[i]=yearlyTable.get(i, 0); 
    selectedYearCount=totalYear.length;
  }

  totalSUM=[]
  for (var i = 0; i<CountYearly ; i++) {
    totalSUM[i]=yearlyTable.get(i, 1); 
    totalSUMCount=totalSUM.length;
  }

  total=[]
  for (var i = 0; i<Count ; i++) {
    total[i]=victimsTable.get(i, 4); 
    totalCount=total.length;
  }

  years=[]
  for (var i = 0; i<Count ; i++) {
    years[i]=victimsTable.get(i, 0); //gets the value from row i, column 1 in the file
    yearsCount=years.length ;
  }


  type=[]
  for (var i = 0; i<Count ; i++) {
    type[i]=victimsTable.get(i, 1); 
    typeCount=type.length;
  }

  genderSexuality=[]
  for (var i = 0; i<Count ; i++) {
    genderSexuality[i]=victimsTable.get(i, 2); 
    genderCount=genderSexuality.length;
  }

  race=[]
  for (var i = 0; i<Count ; i++) {
    race[i]=victimsTable.get(i, 3); 
    raceCount= race.length;
  }
  //unnecessary but just to check that the right number of elements is listed
  print (yearsCount, totalCount, typeCount, genderCount, raceCount)
  print (years, total, type, genderSexuality, race)

  for (var i = 0; i < yearlyTable.getRowCount(); i++) {
    maxTotal = max(yearlyTable.getNum(i,'TOTALSUM'), maxTotal);
    maxLabel = max(yearlyTable.getString(i,'YEAR').length, maxLabel);
  }
  print('Maximum total is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);

  createCanvas(650,275);

}

// Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

function draw(){
    background(255);
    fill(0, 0, 40);
    noStroke();
    textSize (18);
    textAlign(RIGHT, TOP); //so this draws the chart and puts the label - so gotta be the number of victims
    for (var i = 0; i < yearlyTable.getRowCount(); i++) {
        var totalforchart= yearlyTable.getNum(i,1);
        var lengthforchart= map(totalforchart, 0, maxTotal, 0, maxLength);
        //  map(value, start1, stop1, start2, stop2)
        rect(maxLabel * 15, 40*i, lengthforchart, 20);
          // rect(x ie where it starts from counting from the left of the page,y i.e. vertical spacing,width,height,radius [if rounded rectangle])
        text(nfc(totalforchart, 0), maxLabel * 14, 40*i); //last value is the y axis/line spacing too
    }
    textAlign(LEFT, BOTTOM); //so this gives the label of the left aligned object which is the value of bin
    for (var i = 0; i < yearlyTable.getRowCount(); i++) {
        text('in ' + yearlyTable.getString(i,0), maxLabel * 1, 40*i); //y values are consistent except for here cause i wanna reduce the line spacing
          // text(content/string, x, height)
        textSize(16);
        fill (102,0,29);
    }
}