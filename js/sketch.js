// we are going to create two dummy arrays with some data (one for values and another one for country names), 
// and we will create a bar chart with this data

// ***** Global variables ***** //
var myData = [12, 43, 15, 25, 34];
var labels = ['Colombia', 'Peru', 'Venezuela', 'Chile', 'Argentina'];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(18);
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(0);
  noStroke();
  // Drawing the bar chart
  for (var i = 0; i < myData.length; i++) {
    rect(100, 5 + 20*i, myData[i] * 10, 15);
  }
  // Drawing the labels
  for (var i = 0; i < labels.length; i++) {
    text(labels[i], 10, 20*i);
  }
}

// load the data and create a bar chart with it//
// ***** Global variables ***** //
var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

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
    topRefugeesTable.addColumn('Country');
    topRefugeesTable.addColumn('Total');
    for (var i = 0; i < refugeeTable.getRowCount(); i++) {
        var totalRefugees = refugeeTable.getNum(i, 'Total');
        if (totalRefugees >= 100000) {
            var newRow = topRefugeesTable.addRow()
            newRow.setString('Country', refugeeTable.getString(i, 'Country'));
            newRow.setNum('Total', refugeeTable.getNum(i, 'Total'));
        }
    }
    print('New top refugee table created...');
}

function drawCountries(tableName){
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < tableName.getRowCount(); i++) {
        var total = tableName.getNum(i, 'Total');
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 5, 2 + 14*i, length, 12);
        text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < tableName.getRowCount(); i++) {
        text(tableName.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
    }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries(topRefugeesTable);
}

// ***** Draw function --> basically for every instance of the
// number i, which is first called as 0, and then defined as  
// less than the row count i.e. whenever row count >0, and i++
// runs after the loop to move onto the next instance of i
// (i.e. increases a value after the loop has been executed) ***** //
// function draw(){
//     background(255);
//     fill(0);
//     noStroke();
//     textAlign(LEFT, TOP);
//     for (var i = 0; i < refugeeTable.getRowCount(); i++) {
//         var total = refugeeTable.getNum(i, 'Total');
//         var length = map(total, 0, maxTotal, 0, maxLength);
//         rect(maxLabel * 5, 2 + 14*i, length, 12);
//           // rect(x,y,width,height,radius [if rounded rectangle])
//         text(nfc(total, 0), maxLabel * 5 + length + 5, 14*i);
//     }
//     textAlign(RIGHT, TOP);
//     for (var i = 0; i < refugeeTable.getRowCount(); i++) {
//         text(refugeeTable.getString(i, 'Country'), maxLabel * 5 - 5, 14*i);
//           // text(content/string, x, height)
//     }
// }

