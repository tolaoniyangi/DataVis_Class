// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total'];
var startChartY = 100;

// ***** Preload function ***** //
function preload(){
    refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
    console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 3000);
    textSize(12);
    console.log('Setup complete...');
    print(refugeeTable.getRowCount() + ' rows loaded...');
    print(refugeeTable.getColumnCount() + ' columns loaded...');
    for (var i = 0; i < refugeeTable.getRowCount(); i++) {
        maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
        maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
    }
    print('Maximum total is ' + maxTotal);
    print('Maximum label length is ' + maxLabel);
    createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
    for (var i = 0; i < headers.length; i++) {
      topRefugeesTable.addColumn(headers[i]);
    }
    // topRefugeesTable.addColumn('Country');
    // topRefugeesTable.addColumn('Total');
    for (var i = 0; i < refugeeTable.getRowCount(); i++) {
        var totalRefugees = refugeeTable.getNum(i, 'Total');
        if (totalRefugees >= 100000) {
            var newRow = topRefugeesTable.addRow() 
            for (var j = 0; j < headers.length; j++) {
              newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
            }
        }
    }
    print('New top refugee table created...');
    print(topRefugeesTable);
}

function drawCountries(category){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(12);
    //calculating maximum value
    maxTotal = 0; //**important, you should reset your maximum, otherwise it might keep the previous one
    for (var i=0; i < topRefugeesTable.getRowCount(); i++) {
        maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
    }
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
        var total = topRefugeesTable.getNum(i, category);
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 5, startChartY + 2 + 14*i, length, 12);
        text(nfc(total, 0), maxLabel * 5 + length + 5, startChartY + 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
        text(topRefugeesTable.getString(i, 'Country'), maxLabel * 5 - 5, startChartY + 14*i);
    }
}

function drawButtons(){
    noFill();
    stroke(0);
    strokeWeight(1);
    for (var i = 1; i < headers.length; i++) { //***note that we are starting this loop from '1' in order to skip the first colmn that contains the country names.
        rect(50 + i * 80, 50, 75, 20);
    }
    fill(0);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(8);
    for (var i = 1; i < headers.length; i++) { //***note that we are starting this loop from '1' in order to skip the first colmn that contains the country names.
        text(headers[i], 90 + i * 80, 60);
    }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries('Returned refugees');
    drawButtons();
    noStroke();
    fill(0);
    text(str(mouseX) + ', ' + str(round(mouseY)), mouseX, mouseY);
}