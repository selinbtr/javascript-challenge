// from data.js
var tableData = data;
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");

// Iterate
tableData.forEach((i) => {
    var row = tbody.append("tr");
    Object.entries(i).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  // Get the value property of the input element


     filteredData = tableData;

     if (inputDate) {
         filteredData = filteredData.filter(record => record.datetime === inputDate);
     }
     if (inputCountry) {
         filteredData = filteredData.filter(record => record.country === inputCountry);
     }
     if (inputState) {
         filteredData = filteredData.filter(record => record.state === inputState);
     }
     if (inputCity) {
         filteredData = filteredData.filter(record => record.city === inputCity);
     }
     if (inputShape) {
         filteredData = filteredData.filter(record => record.shape === inputShape);
     }


  // Iterate
  tbody.html("");
  filteredData.forEach((i) => {
      var row1 = tbody.append("tr");
      Object.entries(i).forEach(([key, value]) => {
        var cell1 = row1.append("td");
        cell1.text(value);
      });
    });

};

