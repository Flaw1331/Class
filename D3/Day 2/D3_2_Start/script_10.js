// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = ""
var chartHeight = ""

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("#plot")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string

var parseTime = d3.timeParse('%B');

// Load data from miles-walked-this-month.csv
d3.csv(".data\miles-walked-this-month.csv", function (error, milesData) {

  // Throw an error if one occurs
  if (error) throw error;
  milesdata.forEach(function(data)) {




  });
  // Print the milesData
  console.log(milesData);

  // Format the date and cast the miles value to a number
  milesData.forEach(function (data) {
    data.date = parseTime(data.date);
    data.force = +data.force;
  });

  // Configure a time scale with a range between 0 and the chartWidth and the domain as the extent of the dates


  // Configure a linear scale with a range between the chartHeight and 0 and the domain between 0 and the max of the miles walked


  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes


  // Configure a line function which will plot the x and y coordinates using our scales


  // Append an SVG path and plot its points using the line function, give the path a class of line


  // Append an SVG group element to the SVG area, create the left axis inside of it, and give it a class of "axis"


  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  // Give it a class of "axis"
});
